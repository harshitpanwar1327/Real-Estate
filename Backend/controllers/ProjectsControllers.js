import { ProjectsModels } from '../models/ProjectsModels.js'
import { getProjectsLogic, postProjectsLogic, updateProjectsLogic, deleteProjectsLogic} from '../services/ProjectsServices.js'

export const getProjects = async (req,res) => {
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 15;
    let offset = (page - 1) * limit;

    try {
        let response = await getProjectsLogic(limit, offset);
        if(response.success){
            return res.status(200).json(response);
        }else{
            return res.status(400).json(response);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: "Internal Server Error!"});
    }
}

export const postProjects = async(req,res)=>{
    const { name, location, status, description } = req.body;
    
    if(!name || !location || !status){
        return res.status(400).json({success: false, message: "All fields required!"});
    }
    
    const projectData = new ProjectsModels({name, location, status, description});
    
    try {
        const response = await postProjectsLogic(projectData);
        if(response.success){
            return res.status(200).json(response);
        }else{
            return res.status(400).json(response);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: "Internal server error!"});
    }
}

export const updateProjects = async(req,res)=>{
    const id = req.params.id;
    const {name, location, status, description} = req.body;

    if(!id){
        return res.status(400).json({success: false, message: "Project id not found!"});
    }

    const projectData = new ProjectsModels({name, location, status, description});
    
    try {
        let response = await updateProjectsLogic(id, projectData);
        if(response.success){
            return res.status(200).json(response);
        }else{
            return res.status(400).json(response);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({status: false, message: "Internal server error!"});
    }
}

export const deleteProjects = async(req,res)=>{
    const {id} = req.params;    

    if(!id){
        return res.status(400).json({success: false, message: "Project id not found!"});
    }

    try {
        const response = await deleteProjectsLogic(id);
        if(response.success){
            return res.status(200).json(response);
        }else{
            return res.status(400).json(response);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Internal Server error!"});
    }
}