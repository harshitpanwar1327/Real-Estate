import { MediaModels } from '../models/MediaModels.js'
import { getMediaLogic, updateMediaLogic } from '../services/MediaServices.js'

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
    let { type, projectId, propertyId } = req.body;
    const cover = req.files['cover']?.[0]?.filename || null;
    const areaPlan = req.files['area_plan']?.[0]?.filename || null;
    const images = req.files['images']?.map(f => f.filename) || [];

    if(!type || (!propertyId && !projectId)) {
        return res.status(400).json({success: false, message: "Type or id not found!"});
    }

    const mediaData = new MediaModels({ type, projectId, propertyId, cover, areaPlan, images });
    
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