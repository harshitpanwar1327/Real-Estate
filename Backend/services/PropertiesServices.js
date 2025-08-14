import { pool } from '../config/Database.js'

export const propertyDetailsLogic = async (id)=> {
    try {
        let [rows] = await pool.query(`SELECT * FROM properties WHERE id = ?;`, [id]);

        return {success: true, data: rows};
    } catch (error) {
        console.log(error);
        return {success: false, message: "Property details not found!"};
    }
};

export const getPropertiesByIdLogic = async (id, limit, offset, search, minPrice, maxPrice, category, propertyType, bedrooms, bathrooms, balconies, stores, minSuperArea, maxSuperArea, minCarpetArea, maxCarpetArea) => {
    const conditions = [];
    const params = [];

    if (id) {
        conditions.push(`properties.project_id = ?`);
        params.push(id);
    }

    if (search) {
        const searchQuery = `%${search}%`;
        conditions.push(`(properties.title LIKE ? OR properties.location LIKE ?)`);
        params.push(searchQuery, searchQuery);
    }

    if (minPrice !== undefined && maxPrice !== undefined) {
        conditions.push(`(properties.minPrice <= ? AND properties.maxPrice >= ?)`);
        params.push(maxPrice, minPrice);
    }

    if (category) {
        conditions.push(`properties.category = ?`);
        params.push(category);
    }

    if (propertyType) {
        conditions.push(`properties.property_type = ?`);
        params.push(propertyType);
    }

    if (bedrooms) {
        conditions.push(`properties.bedrooms = ?`);
        params.push(bedrooms);
    }

    if (bathrooms) {
        conditions.push(`properties.bathrooms = ?`);
        params.push(bathrooms);
    }

    if (balconies) {
        conditions.push(`properties.balcony = ?`);
        params.push(balconies);
    }

    if (stores) {
        conditions.push(`properties.store = ?`);
        params.push(stores);
    }

    if (minSuperArea !== undefined && maxSuperArea !== undefined) {
        conditions.push(`(properties.super_area BETWEEN ? AND ?)`);
        params.push(minSuperArea, maxSuperArea);
    }

    if (minCarpetArea !== undefined && maxCarpetArea !== undefined) {
        conditions.push(`(properties.carpet_area BETWEEN ? AND ?)`);
        params.push(minCarpetArea, maxCarpetArea);
    }

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

    try {
        const [rows] = await pool.query(
            `SELECT properties.*, media_files.*
             FROM properties
             LEFT JOIN media_files ON properties.id = media_files.property_id
             ${whereClause}
             LIMIT ? OFFSET ?`,
            [...params, limit, offset]
        );

        const [totalCount] = await pool.query(
            `SELECT COUNT(*) AS total
             FROM properties
             ${whereClause}`,
            params
        );

        return { success: true, data: rows, total: totalCount[0].total };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Property not found!" };
    }
};

export const getPropertiesLogic = async (limit, offset, search) => {
    const searchQuery = `%${search}%`;

    try {
        const [rows] = await pool.query(`SELECT * FROM properties WHERE title LIKE ? OR location LIKE ? OR category LIKE ? OR property_type LIKE ? OR status LIKE ? LIMIT ? OFFSET ?`, [searchQuery, searchQuery, searchQuery, searchQuery, searchQuery, limit, offset]);
        const [totalCount] = await pool.query(`SELECT COUNT(*) AS total FROM properties WHERE title LIKE ? OR location LIKE ? OR category LIKE ? OR property_type LIKE ? OR status LIKE ?`, [searchQuery, searchQuery, searchQuery, searchQuery, searchQuery]);

        return { success: true, data: rows, total: totalCount[0].total };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Property not found!" };
    }
};

export const postPropertiesLogic = async (propertiesData) => {
    try {
        const query = `INSERT INTO properties (title, location, minPrice, maxPrice, category, property_type, bedrooms, bathrooms, balcony, store, super_area, carpet_area, status, description, project_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
        const values = [propertiesData.title, propertiesData.location, propertiesData.minPrice, propertiesData.maxPrice, propertiesData.category, propertiesData.property_type, propertiesData.bedrooms, propertiesData.bathrooms, propertiesData.balcony, propertiesData.store, propertiesData.super_area, propertiesData.carpet_area, propertiesData.status, propertiesData.description, propertiesData.project_id];

        let [row] = await pool.query(query,values);

        await pool.query(`INSERT INTO media_files (type, property_id) VALUES ('Property', ?);`, [row.insertId]);
        
        return {success: true, message: "Property saved successfully"};
    } catch (error) {
        console.log(error);
        return {success: false, message: "Property not saved!"};
    }
};

export const updatePropertiesLogic = async (id, propertiesData) => {
    try {
        let query = `UPDATE properties SET title=?, location=?, minPrice=?, maxPrice=?, category=?, property_type=?, bedrooms=?, bathrooms=?, balcony=?, store=?, super_area=?, carpet_area=?, status=?, description=?, project_id=? WHERE id=?;`;
        let values = [propertiesData.title, propertiesData.location, propertiesData.minPrice, propertiesData.maxPrice, propertiesData.category, propertiesData.property_type, propertiesData.bedrooms, propertiesData.bathrooms, propertiesData.balcony, propertiesData.store, propertiesData.super_area, propertiesData.carpet_area, propertiesData.status, propertiesData.description, propertiesData.project_id, id];

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