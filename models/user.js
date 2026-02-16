import mongoose from "mongoose";    

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        // must satisfy these two conditions
        required:true,
        //same email should not be used twice make email primary key
        unique:true
    },
    firstname :{
        type:String,
        //must have firstname
        required:true
},
    lastname :{
        type:String,
        //must have lastname
        required:true
    },
    password :{
        type:String,
        //must have password
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        //by default every user is not admin
        default:false
    },
    isBlocked:{
        type:Boolean,
        required:true,
        //by default every user is not blocked
        default:false
    },
    isEmailverified:{
        type:Boolean,
        required:true,
        //by default every user's email is not verified
        default:false
    },
    image:
    {
        type:String,
        default:""
    }
});
const User = mongoose.model("User",userSchema);
export default User;
