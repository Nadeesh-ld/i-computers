import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import api from "../utils/api";



export default function LoginPage() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const googleLogin = useGoogleLogin(
        {
            onSuccess: (response)=>{
                api.post("/users/google-login",{
                    token : response.access_token
                }).then((response)=>{
                    localStorage.setItem("token" , response.data.token);
                    toast.success("Login successful!");
                    if(response.data.isAdmin){
                        navigate("/admin")
                    }else{
                        navigate("/")
                    }
                }).catch(()=>{
                    toast.error("Google login failed!")
                })
            },
            onError: ()=>{
                toast.error("Google login failed!")
            }
        }
    )

    function handleLogin() {
        console.log("Email:", email);
        console.log("Password:", password);
        axios.post(import.meta.env.VITE_API_URL+"/users/login", { email: email, password: password })
        .then((response) => {
            console.log("Login successful:", response.data);
            localStorage.setItem("token", response.data.token);
            toast.success("Login successful");
            if(response.data.isAdmin){
                navigate("/admin");
            }else{
                navigate("/");
            }
            // Handle successful login, such as storing the token and redirecting
        })
        .catch((error) => {
            alert( error.response.data.message);
            console.error("Login failed:", error);
            toast.error(error.response.data.message || "Login failed");
            // Handle login failure, such as showing an error message
        }); 
    
       
    }
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[url('/loginpage.jpg')] bg-center bg-cover">
        <div className="w-1/2 h-full" >
         </div>  

         <div className="w-1/2 h-full flex justify-center items-center">
             <div className="w-100 h-125 backdrop-blur-lg rounded-xl flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-bold mb-8">Sign in</h1>
                <input 
                    type="text" 
                    placeholder="email" 
                    className="w-3/4 h-10 border border-gray-400 rounded mt-4 px-2" 
                    value={email}
                    onChange={(e) =>
                        console.log(e.target.value) ||
                         setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-3/4 h-10 border border-gray-400 rounded mt-4 px-2" 
                    value={password}
                    onChange={(e) => 
                        console.log(e.target.value) ||
                         setPassword(e.target.value)}
                />
                <p className="forget-password text-sm text-blue-500 mt-4 cursor-pointer">Forget password?<Link to="/forgot-password"> Click here</Link></p>
                <button onClick={handleLogin} className="w-3/4 h-10 bg-blue-500 text-white rounded mt-6">Login</button>
                 <button onClick={googleLogin}  className="w-3/4 p-3 bg-white text-accenti rounded-lg mt-4 flex justify-center items-center gap-2" >
                      <FcGoogle /> Sign in with Google
                    </button>
                <p className="text-sm mt-4">Don't have an account? <Link to="/register">Sign up</Link></p>
                </div>
             </div>
    </div>
  )
}
