//way-1 to verify token--> better for server component
//--> domain.com/verifytoken/asdvsssfshfjhf

//way-2 to verify token with how i craft my email
//better for client component
//--> domain.com/verifytoken?token=asdvsssfshfjhf

//libraries that needed to send email
import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";


export const sendEmail = async ({
    email , 
    emailType, 
    userId}:any) => {
 try{

    //create a hashed token
   const hashedToken = await bcryptjs.hash(userId.toString() , 10)

   //update user in db
   if(emailType === "VERIFY"){
   await User.findByIdAndUpdate(userId ,
    {
        verifyToken: hashedToken, 
        verifyTokenExpiry: Date.now() + 3600000//1hr
     
    })
}else if(emailType === "RESET"){
    await User.findByIdAndUpdate(userId ,
    {
        forgotPasswordToken: hashedToken, 
        forgotPasswordTokenExpiry: Date.now() + 3600000//1hr
     
    })
}

const transport = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,
  port: Number(process.env.MAILTRAP_PORT),
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

//route dont matter for email verification and reset password because we are sending the link in email and user will click on that link to verify or reset password
const mailOptions = {
  from: "test@example.com",
  to: email,
  subject: 
      emailType === "VERIFY" 
      ? "Verify your email" 
      : "Reset your password",

  html: `
      <p>
      Click me
          <a href="${process.env.DOMAIN}/verifytoken?token=${hashedToken}">
            here
     </a> 
     to ${
        emailType === "VERIFY" 
        ? "verify your email" 
        : "reset your password"
    }
    </p>
    `
 };

 const mailresponse = await transport.sendMail(mailOptions);

 return mailresponse;

 }catch(error:any){
    console.error("MAILER ERROR:", error);
    throw new Error(error.message)
 }
    
}