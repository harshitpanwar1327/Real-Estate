import { pool } from '../config/Database.js'

export const allProjectsLogic = async ()=> {
    try {
        let [rows] = await pool.query(`SELECT id, name FROM projects;`);

        return {success: true, data: rows};
    } catch (error) {
        console.log(error);
        return {success: false, message: "Projects not found!"};
    }
};

export const getProjectsLogic = async (limit, offset, search) => {
    let searchQuery = `%${search}%`;
    try {
        let [rows] = await pool.query(`SELECT * FROM projects WHERE name LIKE ? OR location LIKE ? OR status LIKE ? OR description LIKE ? LIMIT ? OFFSET ?;`, [searchQuery, searchQuery, searchQuery, searchQuery, limit, offset]);
        let [totalCount] = await pool.query(`SELECT COUNT(*) AS total FROM projects WHERE name LIKE ? OR location LIKE ? OR status LIKE ? OR description LIKE ?;`, [searchQuery, searchQuery, searchQuery, searchQuery]);

        return {success: true, data: rows, total: totalCount[0].total};
    } catch (error) {
        console.log(error);
        return {success: false, message: "Projects not found!"};
    }
};

export const postProjectsLogic = async(projectData)=>{
    try {
        const query = `INSERT INTO projects (name, location, status, description) VALUES (?, ?, ?, ?);`;
        const values = [projectData.name, projectData.location, projectData.status, projectData.description];
        await pool.query(query,values);
        
        return {success: true, message: "Project saved successfully."};
    } catch (error) {
        console.log(error);
        return {success: false, message: "Project not saved!"};
    }
};

export const updateProjectsLogic = async(id,projectData)=>{
    try {
        let query = `UPDATE projects SET name=?,location=?,status=?, description=? WHERE id=?;`;
        let values = [projectData.name, projectData.location, projectData.status, projectData.description, id];

        await pool.query(query, values);

        return {success: true, message: "Project updated successfully."};
    } catch (error) {
        console.log(error);
        return {success: false, message: "Project details not updated!"};
    }
};

export const deleteProjectsLogic = async(id)=>{
    try {
        let response = await pool.query(`DELETE FROM projects WHERE id= ?`,[id]);
        
        return {success: true, message: "Project deleted successfully"};
    } catch (error) {
        console.log(error);
        return {success: false, message: "Prooject not deleted!"};
    }
};