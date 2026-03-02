 //to hadle scemema structure for understand mongoose
import mongoose from "mongoose"

const studentSchema=new mongoose.Schema(
    {
        name :String,
        age :Number,
        city :String
    }
)
//to handle collection
const Student= mongoose.model("Student",studentSchema)

// to acess outside Students
export default Student