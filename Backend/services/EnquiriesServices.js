import { pool } from '../config/Database.js'

export const getEnquiriesLogic = async()=>{
    try {
        let [rows] = await pool.query(`SELECT * FROM enquiries;`);

        return {success: true, data: rows};
    } catch (error) {
        console.log(error);
        return {success: false, message: "Enquiries not found!"};
    }
};

export const postEnquiriesLogic = async(enquiriesData)=>{
    try {
        const query = `INSERT INTO enquiries (name, email, phone, subject, message, property_id) VALUES (?, ?, ?, ?, ?, ?);`;
        const values = [enquiriesData.name, enquiriesData.email, enquiriesData.phone, enquiriesData.subject, enquiriesData.message, enquiriesData.property_id];

        await pool.query(query,values);
        
        return {success: true, message: "Enquiry saved successfully."};
    } catch (error) {
        console.log(error);
        return {success: false, message: "Enquiry not saved!"};
    }
};

export const deleteEnquiriesLogic = async(id)=>{
    try {
        let response = await pool.query(`DELETE FROM enquiries WHERE id=?`, [id]);
        
        return {success: true, message: "Enquiry deleted successfully."};
    } catch (error) {
        console.log(error);
        return {success: false, message: "Enquiry not deleted!"};
    }
};