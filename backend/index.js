import express from "express";
import mongoose from "mongoose";
import studentRouter from "./routers/studentRouter.js";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import jwt from "jsonwebtoken"
import authenticateUser from "./middlewares/authentication.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const mongodbURI =
  process.env.MONGO_URI;

/* MongoDB connection */
mongoose.connect(mongodbURI)
    .then(() => {
        console.log("MongoDB database connected");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

/* Middleware */
app.use(cors())
app.use(express.json())

// Logging middleware
app.use(authenticateUser)


/* Routes */
app.use("api/students", studentRouter);
app.use("api/users", userRouter); 
app.use("api/products", productRouter); 

/* Server */
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
