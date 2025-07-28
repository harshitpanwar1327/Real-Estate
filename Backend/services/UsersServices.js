import { pool } from '../config/Database.js'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

dotenv.config();

export const registerUserLogic = async (userData) => {
    try {
        const [rows] = await pool.query(`SELECT email FROM users WHERE email = ?;`,[userData.email]);

        if(rows.length>0){
            return { success:false, message:"User already exists" };
        }

        const hashedPassword = await bcrypt.hash(userData.password_hash, 10);
        const query = `INSERT INTO users(email, password_hash) VALUES(?, ?)`;
        const values = [userData.email, hashedPassword];
        await pool.query(query, values);

        return {success: true, message: "User registered successfully"};
    } catch (error) {
        console.log(error);
        return {success: false, message: "Registration failed!"};
    }
}

export const loginUserLogic = async(userData)=>{
    try {
        const [rows] = await pool.query(`SELECT * FROM users WHERE email = ?`, [userData.email]);

        if(rows.length===0){
            return {success:false,message:"Email not exist!"};
        }

        const user = rows[0];

        const passwordMatch = await bcrypt.compare(userData.password_hash, user.password_hash);
        if(!passwordMatch){
            return {success: false, message: "Invalid Credentials!"};
        }
        
        const token = jwt.sign(
            {id:user.id, email:user.email},
            process.env.JWT_SECRET,
            {expiresIn:'3h'}
        );
        
        return {success: true, message: "Login Successfull" , token};
    } catch (error) {
        console.log(error);
        return {success: false, message: "Login failed!"};
    }
}