import { pool } from '../config/Database.js'

export const addMediaLogic = async (mediaData) => {
    try {
        let query = `INSERT INTO media_files(type, property_id, project_id, url1, caption1, url2, caption2, url3, caption3, url4, caption4, url5, caption5) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);`;
        let values = [mediaData.type, mediaData.propertyId, mediaData.projectId, mediaData.url1, mediaData.caption1, mediaData.url2, mediaData.caption2, mediaData.url3, mediaData.caption3, mediaData.url4, mediaData.caption4, mediaData.url5, mediaData.caption5];

        await pool.query(query, values);

        return {success: true, message: 'Media added successfully'};
    } catch (error) {
        console.log(error);
        return {success: false, message: 'Media not added!'};
    }
}

export const getMediaLogic = async (id, type) => {
    let [rows] = [];

    try {
        if(type==='property') {
            [rows] = await pool.query(`SELECT * FROM media_files WHERE property_id = ?`, [id]);
        } else {
            [rows] = await pool.query(`SELECT * FROM media_files WHERE property_id = ?`, [id]);
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
        if(mediaData.type==='property') {
            query = `UPDATE media_files SET type = ?, property_id = ?, project_id = ?, url1 = ?, caption1 = ?, url2 = ?, caption2 = ?, url3 = ?, caption3 = ?, url4 = ?, caption4 = ?, url5 = ?, caption5 = ? WHERE property_id = ?`;
        } else {
            query = `UPDATE media_files SET type = ?, property_id = ?, project_id = ?, url1 = ?, caption1 = ?, url2 = ?, caption2 = ?, url3 = ?, caption3 = ?, url4 = ?, caption4 = ?, url5 = ?, caption5 = ? WHERE project_id = ?`;
        }
        let values = [mediaData.type, mediaData.propertyId, mediaData.projectId, mediaData.url1, mediaData.caption1, mediaData.url2, mediaData.caption2, mediaData.url3, mediaData.caption3, mediaData.url4, mediaData.caption4, mediaData.url5, mediaData.caption5. id];

        await pool.query(query, values);

        return {success: true, message: 'Media updated successfully'};
    } catch (error) {
        console.log(error);
        return {success: false, message: 'Media not updated!'};
    }
}