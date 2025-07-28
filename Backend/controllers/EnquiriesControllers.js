import { EnquiriesModels } from '../models/EnquiriesModels.js'
import { getEnquiriesLogic, postEnquiriesLogic, deleteEnquiriesLogic} from '../services/EnquiriesServices.js'

export const getEnquiries = async (req,res) => {
    try {
        let response = await getEnquiriesLogic();
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

export const postEnquiries = async(req,res)=>{
    const { name, email, phone, subject, message, property_id } = req.body;
    
    if(!name || !email || !message || !property_id){
        return res.status(400).json({success: false, message: "Fill all the required fields!"});
    }
    
    const enquiriesData = new EnquiriesModels({name, email, subject, message, phone, property_id});
    
    try {
        const response = await postEnquiriesLogic(enquiriesData);
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

export const deleteEnquiries = async(req,res)=>{
    const {id} = req.params;    

    if(!id){
        return res.status(400).json({success: false, message: "Enquiry id not found!"});
    }

    try {
        const response = await deleteEnquiriesLogic(id);
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