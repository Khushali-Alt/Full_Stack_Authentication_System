"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";


export default function VerifyEmailPage() {

    //these are my data
    const [token , setToken] = useState("");
    const [verified , setVerified] = useState(false);
    const [error , setError] = useState(false);


    //to verify user email
    const verifyEmail = async () => {

        try{

            //sending req from axios to verify email
            const res = await axios.post("/api/users/verifyemail", {token});
            setVerified(true);
            console.log(res.data);

        }catch(error:any){
            setError(true);
            console.log(error.response.data);
        }
    }

//as soon as somebody land on my page, i have to extract the token from the url and set it to my state
    useEffect(() => {
        // const urltoken= window.location.search.split("=")[1];
        //  setToken(urltoken || "");

    const searchParams = new URLSearchParams(window.location.search);
    const urltoken = searchParams.get("token");

setToken(urltoken || "");
    } , []);


useEffect(() => {
    
      if(token.length > 0){
        verifyEmail();
      }
} , [token]);

return (
   <div className="flex flex-col justify-center items-center min-h-screen py-2">

    <h1 className="text-4xl font-bold mb-4">Verify Email</h1>
    <h2 className="text-xl mb-4 p-2 bg-amber-500 text-black">{token ? `${token}` : "No token found"}</h2>


     {verified && (
        <div>
            <h2 className=" text-2xl">Email verified</h2>
            <Link href="/login">
                  Login
            </Link>

        </div>    
     )}

    {error && (
        <div>
            <h2 className=" text-2xl bg-red-500 text-black">Error</h2>
            
        </div>    
     )}


   </div>

)
}