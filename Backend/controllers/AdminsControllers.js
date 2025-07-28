import { AdminsModels } from '../models/AdminsModels.js'
import { registerAdminLogic, loginAdminLogic } from '../services/AdminsServices.js'

export const registerAdmin = async (req, res) => {
    const {email, password_hash} = req.body;

    if(!email || !password_hash){
        return res.status(400).json({success: false, message: "Fill all the required fields!"});
    }
    
    const adminData = new AdminsModels({email, password_hash});

    try {
        const response = await registerAdminLogic(adminData);
        if(response.success) {
            return res.status(200).json(response);
        }else {
            return res.status(400).json(response);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: "Internal Server Error!"});
    }
}

export const loginAdmin = async(req,res)=>{
    const {email, password_hash} = req.body;

    if(!email || !password_hash){
        return res.status(400).json({success: false, message: "Fill all the required fields!"});
    }

    const adminData = new AdminsModels({email, password_hash});

    try {
        const response = await loginAdminLogic(adminData);
        if(response.success) {
            return res.status(200).json(response);
        }else {
            return res.status(400).json(response);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: "Internal Server Error!"});
    }
}