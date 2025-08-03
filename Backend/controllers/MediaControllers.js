import { MediaModels } from '../models/MediaModels.js'
import { addMediaLogic, getMediaLogic, updateMediaLogic } from '../services/MediaServices.js'

export const addMedia = async (req, res) => {
    let { type, projectId, propertyId, caption1, caption2, caption3, caption4, caption5 } = req.body;
    let url1 = req.files?.url1?.[0]?.filename || null;
    let url2 = req.files?.url2?.[0]?.filename || null;
    let url3 = req.files?.url3?.[0]?.filename || null;
    let url4 = req.files?.url4?.[0]?.filename || null;
    let url5 = req.files?.url5?.[0]?.filename || null;

    if(!type) {
        return res.status(400).json({success: false, message: "Type not found!"});
    }

    const mediaData = await MediaModels({ type, projectId, propertyId, url1, caption1, url2, caption2, url3, caption3, url4, caption4, url5, caption5 });

    try {
        let response = await addMediaLogic(mediaData);
        if(response.success) {
            return res.status(200).json(response);
        } else {
            return res.status(400).json(response);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: "Internal Server Error!"});
    }
}

export const getMedia = async (req, res) => {
    let { id, type } = req.query;

    try {
        let response = await getMediaLogic(id, type);
        if(response.success) {
            return res.status(200).json(response);
        } else {
            return res.status(400).json(response);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: "Internal Server Error!"});
    }
}

export const updateMedia = async (req, res) => {
    let { id } = req.params;
    let { type, projectId, propertyId, caption1, caption2, caption3, caption4, caption5 } = req.body;
    let url1 = req.files?.url1?.[0]?.filename || null;
    let url2 = req.files?.url2?.[0]?.filename || null;
    let url3 = req.files?.url3?.[0]?.filename || null;
    let url4 = req.files?.url4?.[0]?.filename || null;
    let url5 = req.files?.url5?.[0]?.filename || null;

    if(!type) {
        return res.status(400).json({success: false, message: "Type not found!"});
    }

    const mediaData = await MediaModels({ type, projectId, propertyId, url1, caption1, url2, caption2, url3, caption3, url4, caption4, url5, caption5 });
    
    try {
        let response = await updateMediaLogic(id, mediaData);
        if(response.success) {
            return res.status(200).json(response);
        } else {
            return res.status(400).json(response);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: "Internal Server Error!"});
    }
}