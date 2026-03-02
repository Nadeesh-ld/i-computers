import express from "express";
import mongoose from "mongoose";
import studentRouter from "./routers/studentRouter.js";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import jwt from "jsonwebtoken"
import authenticateUser from "./middlewares/authentication.js";


const app = express();

const mongodbURI =
  "mongodb+srv://admin:12345678mn@cluster0.oq3lq37.mongodb.net/?appName=Cluster0";

/* MongoDB connection */
mongoose.connect(mongodbURI)
    .then(() => {
        console.log("MongoDB database connected");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

/* Middleware */
app.use(express.json())

// Logging middleware
app.use(authenticateUser)


/* Routes */
app.use("/students", studentRouter);
app.use("/users", userRouter); 
app.use("/products", productRouter); 

/* Server */
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
