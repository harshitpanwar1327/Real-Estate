import { pool } from '../config/Database.js'

export const getPropertiesLogic = async () => {
    try {
        let [rows] = await pool.query(`SELECT * FROM properties;`);

        return {success: true, data: rows};
    } catch (error) {
        console.log(error);
        return {success: false, message: "Property not found!"};
    }
};

export const postPropertiesLogic = async (propertiesData) => {
    try {
        const query = `INSERT INTO properties (title, location, price, property_type, bedrooms, bathrooms, area_sqft, status, description, project_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
        const values = [propertiesData.title, propertiesData.location, propertiesData.price, propertiesData.property_type, propertiesData.bedrooms, propertiesData.bathrooms, propertiesData.area_sqft, propertiesData.status, propertiesData.description, propertiesData.project_id];

        await pool.query(query,values);
        
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