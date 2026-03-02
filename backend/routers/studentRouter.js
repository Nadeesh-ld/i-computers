import express from "express";

import {getStudents,createstudents} from "../controllers/studentController.js";

const studentRouter = express.Router();

/* GET all students */
studentRouter.get("/",getStudents)

/* CREATE new student */
studentRouter.post("/",createstudents)

export default studentRouter;

