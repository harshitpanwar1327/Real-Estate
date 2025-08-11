import { PropertiesModels } from '../models/PropertiesModels.js'
import { propertyDetailsLogic, getPropertiesLogic, postPropertiesLogic, updatePropertiesLogic, deletePropertiesLogic } from '../services/PropertiesServices.js'

export const propertyDetails = async (req,res) => {
    const {id} = req.params;

    if(!id) {
        return res.status(400).json({success: false, message: 'Property id not found!'});
    }

    try {
        let response = await propertyDetailsLogic(id);
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

export const getProperties = async (req, res) => {
    let page = parseInt(req.body.page) || 1;
    let limit = parseInt(req.body.limit) || 15;
    let offset = (page - 1) * limit;
    let search = req.body.search || '';
    let minPrice = parseInt(req.body.minPrice) || 0;
    let maxPrice = parseInt(req.body.maxPrice) || 1000000000;
    let category = req.body.category || '';
    let propertyType = req.body.propertyType || '';
    let bedrooms = parseInt(req.body.bedrooms) || '';
    let bathrooms = parseInt(req.body.bathrooms) || '';
    let balconies = parseInt(req.body.balconies) || '';
    let stores = parseInt(req.body.stores) || '';
    let minSuperArea = parseInt(req.body.minSuperArea) || '';
    let maxSuperArea = parseInt(req.body.maxSuperArea) || '';
    let minCarpetArea = parseInt(req.body.minCarpetArea) || '';
    let maxCarpetArea = parseInt(req.body.maxCarpetArea) || '';
    
    try {
        let response = await getPropertiesLogic(limit, offset, search, minPrice, maxPrice, category, propertyType, bedrooms, bathrooms, balconies, stores, minSuperArea, maxSuperArea, minCarpetArea, maxCarpetArea);
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
    const { title, location, category, property_type, status, description, project_id } = req.body;
    const minPrice = req.body.minPrice || null;
    const maxPrice = req.body.maxPrice || null;
    const bedrooms = req.body.bedrooms || null;
    const bathrooms = req.body.bathrooms || null;
    const balcony = req.body.balcony || null;
    const store = req.body.store || null;
    const super_area = req.body.superArea || null;
    const carpet_area = req.body.carpetArea || null;

    
    if(!title || !location || !category || !property_type || !status || !project_id){
        return res.status(400).json({success: false, message: "Fill all the required fields!"});
    }
    
    const propertiesData = new PropertiesModels({ title, location, minPrice, maxPrice, category, property_type, bedrooms, bathrooms, balcony, store, super_area, carpet_area, status, description, project_id });
    
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
    const {title, location, category, property_type, status, description, project_id} = req.body;
    const bedrooms = req.body.bedrooms || null;
    const bathrooms = req.body.bathrooms || null;
    const balcony = req.body.balcony || null;
    const store = req.body.store || null;
    const minPrice = req.body.minPrice || null;
    const maxPrice = req.body.maxPrice || null;
    const super_area = req.body.maxPrice || null;
    const carpet_area = req.body.maxPrice || null;

    if(!id) {
        return res.status(400).json({success: false, message: "Property id not found!"});
    }

    const propertiesData = new PropertiesModels({ title, location, minPrice, maxPrice, category, property_type, bedrooms, bathrooms, balcony, store, super_area, carpet_area, status, description, project_id });
    
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