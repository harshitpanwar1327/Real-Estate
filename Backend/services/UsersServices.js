import { pool } from '../config/Database.js'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

dotenv.config();

export const registerUserLogic = async (userData) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM users WHERE email = ? OR phone = ?;`, [userData.email || null, userData.phone || null]);

        if (rows.length > 0) {
            return { success: false, message: "User already exists with provided email or phone." };
        }

        const hashedPassword = await bcrypt.hash(userData.password_hash, 10);

        const query = `INSERT INTO users (email, phone, password_hash) VALUES (?, ?, ?)`;
        const values = [userData.email || null, userData.phone || null, hashedPassword];

        await pool.query(query, values);

        return { success: true, message: "User registered successfully" };
    } catch (error) {
        console.log(error);
        return { success: false, message: "Registration failed!" };
    }
};

export const loginUserLogic = async (userData) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM users WHERE email = ? OR phone = ?`,[userData.email || null, userData.phone || null]);

        if (rows.length === 0) {
            return {success: false, message: "User not found with provided email or phone!"};
        }

        const user = rows[0];

        const passwordMatch = await bcrypt.compare(userData.password_hash, user.password_hash);
        if (!passwordMatch) {
            return { success: false, message: "Invalid Credentials!" };
        }

        const token = jwt.sign(
            { id: user.id, email: user.email, phone: user.phone },
            process.env.JWT_SECRET,
            { expiresIn: '3h' }
        );

        return { success: true, message: "Login Successful", token };
    } catch (error) {
        console.log(error);
        return { success: false, message: "Login failed!" };
    }
};