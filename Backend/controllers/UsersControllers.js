import {UsersModels} from '../models/UsersModels.js'
import { registerUserLogic, loginUserLogic } from '../services/UsersServices.js'

export const registerUser = async (req, res) => {
    const {email, password_hash} = req.body;


    if(!email || !password_hash){
        return res.status(400).json({success: false, message: "Fill all the required fields!"});
    }
    
    const userData = new UsersModels({email, password_hash});

    try {
        const response = await registerUserLogic(userData);
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

export const loginUser = async(req,res)=>{
    const {email, password_hash} = req.body;

    if(!email || !password_hash){
        return res.status(400).json({success: false, message: "Fill all the required fields!"});
    }

    const userData = new UsersModels({email, password_hash});

    try {
        const response = await loginUserLogic(userData);
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