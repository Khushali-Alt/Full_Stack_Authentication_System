//logout means to clear out the tokens that i have

import {NextResponse} from "next/server";

export async function GET() {
    try {
        //only generate a response to clear the cookie
        const response = NextResponse.json({
            message: "Logout successful",
            success: true
        })

        response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) })
        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }   

}