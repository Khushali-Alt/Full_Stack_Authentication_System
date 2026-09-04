import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";







//connect()

export async function POST(request: NextRequest) {
    try {
        await connect();

        const reqBody = await request.json()
        const { username, email, password } = reqBody

        console.log("signup request body", {username, email});

        //check if the user already exists
        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json(
                { error: "User already exists" }, 
                { status: 400 }
            );
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt );

        //to save user in the dataBase
        //create user first

         const newUser =new User({
            username,
            email,
            password: hashedPassword
        })

        //save user to the database
        const savedUser = await newUser.save()

        console.log("user saved",savedUser);


        //send email to user for verification

        await sendEmail({
            email, 
            emailType:"VERIFY",
            userId:savedUser._id.toString(),
        })
             
        return NextResponse.json (
            { 
            message: "User created successfully, Verification email sent",
            success: true,
            savedUser
        }, { status: 201 })

    } catch (error: any) {
        return NextResponse.json(
            { 
                error: error.message || "Something went wrong" 
            }, 
            { status: 500 }
        );

    }

}