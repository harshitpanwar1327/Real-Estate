import { pool } from '../config/Database.js'

export const getProjectsLogic = async()=>{
    try {
        let [rows] = await pool.query(`SELECT * FROM projects;`);

        return {success:true, data:rows};
    } catch (error) {
        console.log(error);
        return {success:false,message:"Project details not fetched!"};
    }
};

export const postProjectsLogic = async(projectData)=>{
    try {
        const query = `INSERT INTO projects (name, location, status, description) VALUES (?, ?, ?, ?);`;
        const values = [projectData.name, projectData.location, projectData.status, projectData.description];
        await pool.query(query,values);
        
        return {success:true,message:"Data save successfully"};
    } catch (error) {
        console.log(error);
        return {success:false,message:"Data not saved"};
    }
};

export const updateProjectsLogic = async(id,projectData)=>{
    try {
        let response = await pool.query(`UPDATE projects SET name=?,location=?,status=?, description=? WHERE id=?;`,
        [projectData.name,projectData.location,projectData.status,projectData.description,id]
        );

        return {success:true,message:"Field updated successfully"};
    } catch (error) {
        console.log(error);
        return {success:false,message:"Field not updated!"};
    }
};

export const deleteProjectsLogic = async(id)=>{
    try {
        let response = await pool.query(`DELETE FROM projects WHERE id=?`,[id]);
        
        return {success:true,message:"Field deleted successfully"};
    } catch (error) {
        console.log(error);
        return {success:false,message:"Field not deleted!"};
    }
};