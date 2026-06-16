import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate()

    function handleRegister(){
        
        if(password != confirmPassword){
            toast.error("Passwords do not match!");
            return;
        }

        axios.post(import.meta.env.VITE_API_URL+"/users/",{
            email : email,
            password : password,
            firstName : firstName,
            lastName : lastName
        }).then(()=>{

            //alert("Login successful!");
            toast.success("Registered successfully!");
        
            navigate("/login")
          

        }).catch((error)=>{
            //alert(error.response.data.message);
            toast.error(error.response.data.message)
        });
    }

	return (
		<div className="w-full min-h-screen flex justify-center items-center bg-[url('/loginpage.jpg')] bg-center bg-cover">
			<div className="w-1/2 h-full" />

			<div className="w-1/2 h-full flex justify-center items-center">
				<div className="w-[520px] h-[620px] backdrop-blur-lg rounded-xl flex flex-col justify-center items-center">
					<h1 className="text-4xl font-bold mb-8">Sign up</h1>
					<div className="w-3/4 flex gap-4">
						<input
							onChange={(e) => setFirstName(e.target.value)}
							value={firstName}
							placeholder="First name"
							className="w-1/2 h-10 border border-gray-400 rounded mt-4 px-2"
						/>
						<input
							onChange={(e) => setLastName(e.target.value)}
							value={lastName}
							placeholder="Last name"
							className="w-1/2 h-10 border border-gray-400 rounded mt-4 px-2"
						/>
					</div>
					<input
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						type="email"
						placeholder="Email"
						className="w-3/4 h-10 border border-gray-400 rounded mt-4 px-2"
					/>
					<input
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						placeholder="Password"
						type="password"
						className="w-3/4 h-10 border border-gray-400 rounded mt-4 px-2"
					/>
					<input
						onChange={(e) => setConfirmPassword(e.target.value)}
						value={confirmPassword}
						placeholder="Confirm password"
						type="password"
						className="w-3/4 h-10 border border-gray-400 rounded mt-4 px-2"
					/>
					<button onClick={handleRegister} className="w-3/4 h-10 bg-blue-500 text-white rounded mt-6">
						Sign up
					</button>
					<p className="text-sm mt-4">
						Already have an account? <Link to="/login">Login</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
