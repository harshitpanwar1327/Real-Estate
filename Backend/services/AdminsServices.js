import { pool } from '../config/Database.js'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

dotenv.config();

export const registerAdminLogic = async (adminData) => {
    try {
        const [rows] = await pool.query(`SELECT email FROM admins WHERE email = ?;`,[adminData.email]);

        if(rows.length>0){
            return { success:false, message:"Admin already exists" };
        }

        const hashedPassword = await bcrypt.hash(adminData.password_hash, 10);
        const query = `INSERT INTO admins(email, password_hash) VALUES(?, ?)`;
        const values = [adminData.email, hashedPassword];
        await pool.query(query, values);

        return {success: true, message: "Admin registered successfully"};
    } catch (error) {
        console.log(error);
        return {success: false, message: "Registration failed!"};
    }
}

export const loginAdminLogic = async(adminData)=>{
    try {
        const [rows] = await pool.query(`SELECT * FROM admins WHERE email = ?`, [adminData.email]);

        if(rows.length===0){
            return {success:false,message:"Email not exist!"};
        }

        const admin = rows[0];

        const passwordMatch = await bcrypt.compare(adminData.password_hash, admin.password_hash);
        if(!passwordMatch){
            return {success: false, message: "Invalid Credentials!"};
        }
        
        const token = jwt.sign(
            {id:admin.id, email:admin.email},
            process.env.JWT_SECRET,
            {expiresIn:'3h'}
        );
        
        return {success: true, message: "Login Successfull" , token};
    } catch (error) {
        console.log(error);
        return {success: false, message: "Login failed!"};
    }
}