
"use client"
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage(){

    const router = useRouter();
    
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
    
    
    return(

        <div className="flex flex-col items-center justify-center min-h-screen py-2">
         <h1> Profile</h1>
         <hr />
         <p>Profile Page</p>

        <hr />
        <button
        onClick={logout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 cursor-pointer rounded">
            Logout
        </button>

    

        </div>
    )
}