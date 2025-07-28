import { pool } from '../config/Database.js'

export const getPropertiesLogic = async()=>{
    try {
        let [rows] = await pool.query(`SELECT * FROM properties;`);

        return {success:true, data:rows};
    } catch (error) {
        console.log(error);
        return {success:false,message:"Property details not fetched!"};
    }
};

export const postPropertiesLogic = async(propertiesData)=>{
    try {
        const query = `INSERT INTO properties (title, location, price, property_type, bedrooms, bathrooms, area_sqft, status, featured, description, project_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
        const values = [propertiesData.title, propertiesData.location, propertiesData.price, propertiesData.property_type, propertiesData.bedrooms, propertiesData.bathrooms, propertiesData.area_sqft, propertiesData.status, propertiesData.featured, propertiesData.description, propertiesData.project_id];
        await pool.query(query,values);
        
        return {success:true,message:"Data save successfully"};
    } catch (error) {
        console.log(error);
        return {success:false,message:"Data not saved"};
    }
};

export const updatePropertiesLogic = async(id,propertiesData)=>{
    try {
        let response = await pool.query(`UPDATE properties SET title=?,location=?,price=?,property_type=?,bedrooms=?,bathrooms=?,area_sqft=?,status=?,featured=?, description=?,project_id=? WHERE id=?;`,
        [propertiesData.title,propertiesData.location,propertiesData.price,propertiesData.property_type,propertiesData.bedrooms,propertiesData.bathrooms,propertiesData.area_sqft,propertiesData.status,propertiesData.featured,propertiesData.description,propertiesData.project_id,id]
        );

        return {success:true,message:"Field updated successfully"};
    } catch (error) {
        console.log(error);
        return {success:false,message:"Field not updated!"};
    }
};

export const deletePropertiesLogic = async(id)=>{
    try {
        let response = await pool.query(`DELETE FROM properties WHERE id=?`,[id]);
        
        return {success:true,message:"Field deleted successfully"};
    } catch (error) {
        console.log(error);
        return {success:false,message:"Field not deleted!"};
    }
};