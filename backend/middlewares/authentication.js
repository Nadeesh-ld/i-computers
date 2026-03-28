import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();

export default function authenticateUser(req, res, next){
        const header = req.header("Authorization");

        console.log(header);
        if (header != null) {
            const token = header.replace("Bearer ", "");

            jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
                console.log(error, decoded);
                if (error) {
                    return res.status(401).json({
                        message: "Invalid token, please login again"
                    });
                }else{

                req.user = decoded;
                next();
            }
        }
        )
        } else {
            next();
        }
    }