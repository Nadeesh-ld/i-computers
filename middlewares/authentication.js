import jwt from "jsonwebtoken"

export default function authenticateUser(req, res, next){
        const header = req.header("Authorization");

        console.log(header);
        if (header != null) {
            const token = header.replace("Bearer ", "");

            jwt.verify(token, "i-computers", (error, decoded) => {
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