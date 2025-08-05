import { pool } from '../config/Database.js'

export const propertyDetailsLogic = async (id)=> {
    try {
        let [rows] = await pool.query(`SELECT * FROM properties WHERE id = ?;`,[id]);

        return {success: true, data: rows};
    } catch (error) {
        console.log(error);
        return {success: false, message: "Property details not found!"};
    }
};

export const getPropertiesLogic = async (limit, offset, search, propertyType, bedrooms, bathrooms, minPrice, maxPrice, minArea, maxArea) => {
    const searchQuery = `%${search}%`;

    const conditions = [];
    const params = [];

    if (search) {
        conditions.push(`(title LIKE ? OR location LIKE ?)`);
        params.push(searchQuery, searchQuery);
    }

    if (propertyType) {
        conditions.push(`property_type = ?`);
        params.push(propertyType);
    }

    if (bedrooms) {
        conditions.push(`bedrooms = ?`);
        params.push(bedrooms);
    }

    if (bathrooms) {
        conditions.push(`bathrooms = ?`);
        params.push(bathrooms);
    }

    if (minPrice !== undefined && maxPrice !== undefined) {
        conditions.push(`price BETWEEN ? AND ?`);
        params.push(minPrice, maxPrice);
    }

    if (minArea !== undefined && maxArea !== undefined) {
        conditions.push(`area_sqft BETWEEN ? AND ?`);
        params.push(minArea, maxArea);
    }

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

    try {
        const [rows] = await pool.query(
            `SELECT * FROM properties ${whereClause} LIMIT ? OFFSET ?`,
            [...params, limit, offset]
        );

        const [totalCount] = await pool.query(
            `SELECT COUNT(*) AS total FROM properties ${whereClause}`,
            params
        );

        return { success: true, data: rows, total: totalCount[0].total };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Property not found!" };
    }
};

export const postPropertiesLogic = async (propertiesData) => {
    try {
        const query = `INSERT INTO properties (title, location, price, property_type, bedrooms, bathrooms, area_sqft, status, description, project_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
        const values = [propertiesData.title, propertiesData.location, propertiesData.price, propertiesData.property_type, propertiesData.bedrooms, propertiesData.bathrooms, propertiesData.area_sqft, propertiesData.status, propertiesData.description, propertiesData.project_id];

        let [row] = await pool.query(query,values);

        await pool.query(`INSERT INTO media_files (type, property_id) VALUES ('property', ?);`, [row.insertId]);
        
        return {success: true, message: "Property saved successfully"};
    } catch (error) {
        console.log(error);
        return {success: false, message: "Property not saved!"};
    }
};

export const updatePropertiesLogic = async (id, propertiesData) => {
    try {
        let query = `UPDATE properties SET title=?, location=?, price=?, property_type=?, bedrooms=?, bathrooms=?, area_sqft=?, status=?, description=?, project_id=? WHERE id=?;`;
        let values = [propertiesData.title, propertiesData.location, propertiesData.price, propertiesData.property_type, propertiesData.bedrooms, propertiesData.bathrooms, propertiesData.area_sqft, propertiesData.status, propertiesData.description, propertiesData.project_id, id];

        await pool.query(query, values);

        return {success: true, message: "Property updated successfully."};
    } catch (error) {
        console.log(error);
        return {success: false, message: "Property not updated!"};
    }
};

export const deletePropertiesLogic = async (id) => {
    try {
        let response = await pool.query(`DELETE FROM properties WHERE id=?`, [id]);
        
        return {success: true, message: "Property deleted successfully."};
    } catch (error) {
        console.log(error);
        return {success: false, message: "Property not deleted!"};
    }
};