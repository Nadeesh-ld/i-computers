import User from '../models/user.js';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken" 
import dotenv from "dotenv";

dotenv.config();
export async function createuser(req, res) {
    try {
        // Validate required fields
        if (!req.body.email || !req.body.firstname || !req.body.lastname || !req.body.password) {
            return res.status(400).json({ 
                message: 'Please provide email, firstname, lastname, and password' 
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ 
                message: 'User with this email already exists' 
            });
        }

        const passwordHash = bcrypt.hashSync(req.body.password, 10);

        const newUser = new User({
            email: req.body.email,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: passwordHash
        });
        
        await newUser.save();
        return res.status(201).json({ 
            message: 'User created successfully',
            user: {
                email: newUser.email,
                firstname: newUser.firstname,
                lastname: newUser.lastname
            }
        });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ 
            message: 'Error creating user', 
            error: error.message
        });
    }
}

export async function loginUser(req, res) {
    try {
        const user =await User.findOne({ 
            email: req.body.email
        });
        if(user==null){
             return res.status(404).json({
                 message: 'User not found' 
                });
        }
        else{
            const isPasswordCorrect=bcrypt.compareSync(req.body.password,user.password)
            if(isPasswordCorrect){
                const payload={
                    email:user.email,
                    firstname:user.firstname,
                    lastname:user.lastname,
                    isAdmin:user.isAdmin,
                    isBlocked:user.isBlocked,
                    isEmailverified:user.isEmailverified,
                    image:user.image


                }
                const token=jwt.sign(payload,process.env.JWT_SECRET)
                return res.status(200).json({
                    token:token,
                    role :user.isAdmin ? "admin" : "user",
                });
            }
            else{
                res.status(401).json({ 
                    message: 'Invalid password' 
                })
            }
        }
    } catch (error) {
        res.status(500).json({ 
            message: 'Error logging in', error: error.message 
        });
    }
}
export default function isAdmin(req){
    if(req.user==null){
        return false
    }
    if(req.user.isAdmin){
        return true
    }else{
        return false
    }
}