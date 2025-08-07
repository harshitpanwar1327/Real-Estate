import { pool } from '../config/Database.js'

export const getMediaLogic = async (id, type) => {
    let [rows] = [];

    try {
        if(type==='Property') {
            [rows] = await pool.query(`SELECT * FROM media_files WHERE property_id = ?`, [id]);
        } else {
            [rows] = await pool.query(`SELECT * FROM media_files WHERE project_id = ?`, [id]);
        }

        return {success: true, data: rows}
    } catch (error) {
        console.log(error);
        return {success: false, message: 'Media not fetched!'};
    }
}

export const updateMediaLogic = async (id, mediaData) => {
    let query;

    try {
        if(mediaData.type==='Property') {
            query = `UPDATE media_files SET type = ?, property_id = ?, project_id = ?, cover = ?, area_plan = ?, images = ? WHERE property_id = ?`;
        } else {
            query = `UPDATE media_files SET type = ?, property_id = ?, project_id = ?, cover = ?, area_plan = ?, images = ? WHERE project_id = ?`;
        }
        let values = [mediaData.type, mediaData.propertyId, mediaData.projectId, mediaData.cover, mediaData.areaPlan, JSON.stringify(mediaData.images), id];

        await pool.query(query, values);

        return {success: true, message: 'Media updated successfully'};
    } catch (error) {
        console.log(error);
        return {success: false, message: 'Media not updated!'};
    }
}