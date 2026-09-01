"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";




export default function LoginPage(){
    const [user , setUser] = React.useState({
        email:"",
        password:"",
 
    })

     const onLogin=async()=>{

     }
     return (
   <div className="flex flex-col items-center justify-center min-h-screen py-2">
  <h1 className="text-2xl font-bold mb-4">Login</h1>

  <hr className="w-full max-w-sm mb-6" />

  <label htmlFor="email" className="mb-2">
    email
  </label>

  <input
    className="w-80 p-2 border border-gray-300 rounded-lg mb-4 
               focus:outline-none focus:border-gray-600"
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
    className="w-80 p-2 border border-gray-300 rounded-lg mb-4 
               focus:outline-none focus:border-gray-600"
    type="password"
    id="password"
    value={user.password}
    onChange={(e) => setUser({...user, password: e.target.value})}
    placeholder="password"
  />

<button
onClick={onLogin}
className="w-80 p-2 border border-gray-300 rounded-lg mb-4 
               focus:outline-none focus:border-gray-600"
               > Login here </button>
<Link href="/signup">visit SignUP here</Link>               
  
</div>
      
     )
}