import { PropertiesModels } from '../models/PropertiesModels.js'
import { getPropertiesLogic, postPropertiesLogic, updatePropertiesLogic, deletePropertiesLogic } from '../services/PropertiesServices.js'

export const getProperties = async (req, res) => {
    let page = parseInt(req.body.page) || 1;
    let limit = parseInt(req.body.limit) || 15;
    let offset = (page - 1) * limit;
    let search = req.body.search || '';
    let propertyType = req.body.propertyType || '';
    let bedrooms = parseInt(req.body.bedrooms) || '';
    let bathrooms = parseInt(req.body.bathrooms) || '';
    
    try {
        let response = await getPropertiesLogic(limit, offset, search, propertyType, bedrooms, bathrooms);
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

export const postProperties = async (req, res) => {
    const { title, location, price, property_type, bedrooms, bathrooms, area_sqft, status, description, project_id } = req.body;
    
    if(!title || !location || !price || !property_type || !area_sqft || !status || !project_id){
        return res.status(400).json({success: false, message: "All fields required!"});
    }
    
    const propertiesData = new PropertiesModels({title, location, price, property_type, bedrooms, bathrooms, area_sqft, status, description, project_id});
    
    try {
        const response = await postPropertiesLogic(propertiesData);
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

export const updateProperties = async (req, res) => {
    const id = req.params.id;
    const {title, location, price, property_type, bedrooms, bathrooms, area_sqft, status, description, project_id} = req.body;

    if(!id){
        return res.status(400).json({success: false, message: "Property id not found!"});
    }

    const propertiesData = new PropertiesModels({title, location, price, property_type, bedrooms, bathrooms, area_sqft, status, description, project_id});
    
    try {
        let response = await updatePropertiesLogic(id, propertiesData);
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

export const deleteProperties = async (req, res) => {
    const {id} = req.params;    

    if(!id){
        return res.status(400).json({success: false, message: "Property id not found!"});
    }

    try {
        const response = await deletePropertiesLogic(id);
        if(response.success){
            return res.status(200).json(response);
        }else{
            return res.status(400).json(response);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: "Internal Server error!"});
    }
}