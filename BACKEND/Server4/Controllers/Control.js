import express from "express"
import {UserModel} from "../Models/UserSchema.js"
import nodemailer from "nodemailer"

 const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,          
  secure: true,       // true for port 465
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSKEY,
  },
});
 
let GenerateOTP =()=>{
   return OTPGENERATE = Math.floor((Math.random()*9000)+1000)
}

let SendMail=async()=>{
   let otp=GenerateOTP()
   let SendedMailResult=nodemailer.sendMail({
      from :process.env.USER_EMAIL,
      to:email,
      subject :"Complete Your Sign-In with Secured OTP",
      html:`<div style="font-family:sans-serif; background: #fff; padding: 20px; border: 1px solid #eee; border-radius: 6px; margin: auto; text-align: center;">
     <h2 style="color: #333; margin-bottom: 10px;">Verification Code</h2>
      <p style="color: #555; font-size: 14px;">Use the OTP below to verify your email:</p>'
      <h1 style="color: #e63946; margin: 15px 0;">${otp}</h1>
     </div>`
   })
}
let PostUserRegister= async(request,response)=>{
    try{
       let { Name, Phone, Email, Address, Password } = request.body

      //validating whether user has given all the required data
     if(!Name || !Phone || !Email|| !Address|| !Password) throw("Please fill all required the information!")

     //checking if the user already exist
     let UserExist = await UserModel.findOne(
        {
            $or: [
                {
                 "Email.Email": Email //Email.Email--> Email object key Email
                 },
                  {
                     "Phone": Phone 
                  }
                ]
        }
     )

      if (UserExist) throw("The given email or phone is already exist!")
      
         let EmailObject = {
            Email: Email, verified: false
        }
      //Register new user
        let NewUser = new UserModel({ Name, Phone, Email:EmailObject, Address, Password })

        //saving details
        await NewUser.save()
        
        
         response.status(202).json(
            { message: "User has been registered successfuly!" }
         )
    }
    catch(error){
      response.status(400).json(
         {message:"Unable to register user !",error}
      )
    }
}
export {PostUserRegister}