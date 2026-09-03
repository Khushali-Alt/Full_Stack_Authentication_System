
"use client"
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import React,{ useState } from "react";

export default function ProfilePage(){

    const router = useRouter();
    const [data , setData] = useState("Nothing");
    
    const logout = async () => {
        try {

            //after logout, we want to clear the cookie and redirect the user to the login page
            await axios.get("/api/users/logout")
            toast.success("Logout successful");
            router.push("/login");
        
        } catch (error:any) {
            console.error(error.message || "An error occurred during logout");
            toast.error(error.message || "An error occurred during logout");
        }
    };
    
    
    const getUserDetails= async () => {
        const res= await axios.get("/api/users/me");
        console.log(res.data);
        setData(res.data.data._id);

    }

    return(

        <div className="flex flex-col items-center justify-center min-h-screen py-2">
         <h1> Profile</h1>
         <hr />
         <p>Profile Page</p>
        <h2 className="p-1 rounded bg-green-500 cursor-pointer hover:bg-green-600 ">{data =='Nothing' ? "Nothing" : <Link 
        href={`/profile/${data}`}> {data}</Link>}View Profile</h2>

        <hr />
        <button
        onClick={logout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 cursor-pointer rounded">
            Logout
        </button>

        <button
        onClick={getUserDetails}
        className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 cursor-pointer rounded">
            Get User Details
        </button>

    

        </div>
    )
}