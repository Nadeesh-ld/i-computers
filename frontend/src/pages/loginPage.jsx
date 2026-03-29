import { Route,Routes,Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";



export default function LoginPage() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogin() {
        console.log("Email:", email);
        console.log("Password:", password);
        axios.post(import.meta.env.VITE_API_URL+"/users/login", { email: email, password: password })
        .then((response) => {
            console.log("Login successful:", response.data);
            localStorage.setItem("token", response.data.token);
            toast.success("Login successful");
            if(response.data.role === "admin"){
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
        <h1 className="text-2xl font-bold">Login Page</h1>   
        <div className="w-1/2 h-full" >
         </div>  

         <div className="w-1/2 h-full flex justify-center items-center">
             <div className="w-[400px] h-[500px] backdrop-blur-lg rounded-xl flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-bold mb-8">Sign in</h1>
                <input 
                    type="text" 
                    placeholder="email" 
                    className="w-3/4 h-10 border-[1px] border-gray-400 rounded mt-4 px-2" 
                    value={email}
                    onChange={(e) =>
                        console.log(e.target.value) ||
                         setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-3/4 h-10 border-[1px] border-gray-400 rounded mt-4 px-2" 
                    value={password}
                    onChange={(e) => 
                        console.log(e.target.value) ||
                         setPassword(e.target.value)}
                />
                <p className="forget-password text-sm text-blue-500 mt-4 cursor-pointer">Forget password?<Link to="/forgot-password"> Click here</Link></p>
                <button onClick={handleLogin} className="w-3/4 h-10 bg-blue-500 text-white rounded mt-6">Login</button>
                <p className="text-sm mt-4">Don't have an account? <Link to="/signup">Sign up</Link></p>
                </div>
             </div>
    </div>
  )
}
