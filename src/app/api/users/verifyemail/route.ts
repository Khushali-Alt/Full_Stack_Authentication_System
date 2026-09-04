//already things are there in my database, just extract things from the token and verify it with the hashed token in the database and then update the user in the database to verify the email

import {connect} from "@/dbConfig/dbConfig";
import {NextRequest,NextResponse} from "next/server";
import User from "@/models/userModel";




connect();

export async function POST(request:NextRequest){

    try{
       //grab tokens from request body
     const {token} = await request.json();
     console.log(token);

    //user based on the token
    const user = await User.findOne({verifyToken:token, 
        verifyTokenExpiry:{$gt:Date.now()}});

    //if user not found
    if(!user){
        return NextResponse.json({error:"Invalid or Expired Token"},
            {status:400})    
        }        

        console.log(user);

    //update user to verify email
    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;

    await user.save();

    return NextResponse.json({
        message:"Email Verified Successfully.You can now login.",
        success:true
    })
    
    }catch(error:any){
        return NextResponse.json({message:error.message},{status:500})
    }

}
    