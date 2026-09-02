"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";




export default function Signup(){
  const router= useRouter();
    const [user , setUser] = React.useState({
        email:"",
        password:"",
        username:"",

        
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const [loading, setLoading] = React.useState(false);

     const onSignup=async()=>{
      try{
        setLoading(true);

        const response =await axios.post("/api/users/signup", user);

        console.log("signup success", response.data);

        toast.success("signup success");

        router.push("/login");

      }catch(error:any){
        console.log("signup failed", error.message);
        
        toast.error(error.message);
          
     }finally{
        setLoading(false);
      }
    };


     
     //depend on the user
     useEffect(()=>{
      if(user.email.length>0 && user.password.length>0
        && user.username.length>0){
        setButtonDisabled(false);
      }else{
        setButtonDisabled(true);
      }
     }, [user]);



return (
   <div className="flex flex-col items-center justify-center min-h-screen py-2">
  <h1 className="text-2xl font-bold mb-4 text-white">{loading ? "Processing.." : "Singup"}</h1>

  <hr className="w-full max-w-sm mb-6" />

  <label htmlFor="username" className="mb-2">
    Username
  </label>

  <input
    className="w-80 p-2 border bg-white border-gray-300 rounded-lg mb-4 
               focus:outline-none placeholder:text-gray-400 focus:border-gray-600 text-black "
    type="text"
    id="username"
    value={user.username}
    onChange={(e) => setUser({...user, username: e.target.value})}
    placeholder="Username"
  />

  <label htmlFor="email" className="mb-2">
    email
  </label>

  <input
    className="w-80 p-2 border bg-white border-gray-300 rounded-lg mb-4 
               focus:outline-none text-black focus:border-gray-600 placeholder:text-gray-400 "
    type="text"
    id="email"
    value={user.email}
    onChange={(e) => setUser({...user, email: e.target.value})}
    placeholder="email"
  />

  <label htmlFor="password" className="mb-2">
    password
  </label>

  <input
    className="w-80 p-2 border bg-white border-gray-300 rounded-lg mb-4 
               focus:outline-none text-black  focus:border-gray-600 placeholder:text-gray-400 "
    type="password"
    id="password"
    value={user.password}
    onChange={(e) => setUser({...user, password: e.target.value})}
    placeholder="password"
  />

<button
onClick={onSignup}
className="w-80 p-2 border bg-white border-gray-300 rounded-lg mb-4 
               focus:outline-none focus:border-gray-600 text-black"
               > {buttonDisabled ? "No signup" : "Sign Up"}</button>
<Link href="/login">visit login here</Link>               
  
</div>
      
     );
}
