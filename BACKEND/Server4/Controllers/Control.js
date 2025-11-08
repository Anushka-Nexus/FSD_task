import express from "express"
import { UserModel } from "../Models/UserSchema.js"
import nodemailer from "nodemailer"
import bcrypt from "bcrypt"

const transporter = nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 465,
   secure: true,       // true for port 465
   auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSKEY,
   },
});

let GenerateOTP = () => {
   return OTPGENERATE = Math.floor((Math.random() * 9000) + 1000)
}

let SendEmail = async (Email) => {
   try {
      let otp = GenerateOTP()
      let SendedMailResult = await transporter.sendMail({
         from: process.env.USER_EMAIL,
         to: Email,
         subject: "Complete Your Sign-In with Secured OTP",
         html: `<div style="font-family:sans-serif; background: #fff; padding: 20px; border: 1px solid #eee; border-radius: 6px; margin: auto; text-align: center;">
     <h2 style="color: #333; margin-bottom: 10px;">Verification Code</h2>
      <p style="color: #555; font-size: 14px;">Use the OTP below to verify your email:</p>'
      <h1 style="color: #e63946; margin: 15px 0;">${otp}</h1>
      <h5>This otp is valid for 5 minutes</h5>
     </div>`
      })

      console.log("Email has been sent to the user!")

      redisClient.set(`user.${email}`, otp, 300)

      return SendedMailResult

   } catch (error) {
        console.log("Unable to send the user!")
        console.log(error)
   }
}
let PostUserRegister = async (request, response) => {
   try {
      let { Name, Phone, Email, Address, Password } = request.body

      //validating whether user has given all the required data
      if (!Name || !Phone || !Email || !Address || !Password) throw ("Please fill all required the information!")

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

      if (UserExist) throw ("The given email or phone is already exist!")

      let EmailObject = {
         Email: Email, verified: false
      }
       
      await SendEmail(Email)
      //Register new user
      let NewUser = new UserModel({ Name, Phone, Email: EmailObject, Address, Password })

      //saving details
      await NewUser.save()


      response.status(202).json(
         { message: "User has been registered successfuly!" }
      )
   }
   catch (error) {
      response.status(400).json(
         { message: "Unable to register user !", error }
      )
   }
}

const HandleEmailOtp=async(req,res)=>{
  try{
    let {Email,otp}=req.body
    if(!Email || !otp)throw("INVALID DATA!")
    
      let User = await UserModel.findOne({
         "Email.Email" : Email
      })

      //user register na ho to
      if(!User)throw("Please register the user first!")
       
      let StoredUserOtp = await redisClient.get(`User.${User.Email.Email}`)
       
       if(!StoredUserOtp) throw("Invalid OTP!")
        
         //if otp is diff from stored one from user 
       if(StoredUserOtp != otp) throw("Incorrect OTP!Please try again..")

       let NewUpdatedResult = await UserModel.updateOne({ "Email.Email": Email }, { "Email.Verified": true })
       
       //if already updated
       if (NewUpdatedResult.modifiedCount == 0) throw("Didn't update the information!")

       res.status(202).json({
          message: "Verified OTP successfully!"
      })


  }catch(error){
      res.status(400).json({ 
         message: "Unable to verify the otp", error
       })
  }
}

const HandlePasswordReset=async(req,res)=>{
   try{
      let {Email}=req.body

      //check if we had get the email1 or not
      if(!Email) throw("Invalid data! Please pass the email.")
      
      //check if user is registered
      let ExistUser = UserModel.findOne({"Email.Email":Email})

      //if user not exist
      if(!ExistUser)throw("Unregistered User! Please register first.")

      //generate otp
      let passotp =Math.floor((Math.random() * 9000) + 1000)

      //Save OTP in Redis for 5 mins
      await redisClient.set(`resetpassword.${Email}`, passotp, 300)
      
      //send otp in email
      let SendasswordResetEmail = await transporter.sendMail({
         from: process.env.USER_EMAIL,
         to: Email,
         subject: "Change your password with secured otp",
         html: `<div style="font-family:sans-serif; background: #fff; padding: 20px; border: 1px solid #eee; border-radius: 6px; margin: auto; text-align: center;">
     <h2 style="color: #333; margin-bottom: 10px;">Verification Code</h2>
      <p style="color: #555; font-size: 14px;">Use the OTP below to verify your email:</p>'
      <h1 style="color: #e63946; margin: 15px 0;">${passotp}</h1>
      <h5>This otp is valid for 5 minutes</h5>
     </div>`
      })

      res.status(200).json({ message: "Password reset otp is sent!" })

   }catch(error){
        res.status(400).json({ message: "Unable to send the otp for reseting the password!", error })
   }
}

let HandlePasswordResetOtp=async(req,res)=>{
   try{
     //take email otp newpass from body
     let {Email,passotp,NewPassword}=req.body
     
     //check if all fields are present
     if(!Email ||!passotp||!NewPassword)throw("Please pass all the required info that is Email,Otp and new password")

     //check if user exist
     let PresentUser= await UserModel.findOne({"Email.Email":Email})
     if(!PresentUser)throw ("Invalid User! User didn't exist.")

     //validate otp 
      let passwordotp = await redisClient.get(`resetpassword.${Email}`)
      if(!passwordotp)throw("Expired OTP!")
      if(passwordotp!=passotp)throw("Incorrect OTP!")

     //hash password
     let NewHashPassword = await bcrypt.hash(NewPassword, 12)

     //update the password
     let UpdatePassword = await UserModel.updateOne(
            { "Email.Email": Email },
            { $set: { Password: NewHashPassword } }
        )
     
   //if already updated
       if (UpdatePassword.modifiedCount == 0) throw("Didn't update the information!")

    //sending response
     res.status(200).json({ message: "Verified new password!" })
   }catch(error){
       res.status(400).json({ 
         message: "Unable to reset password!", error
       })
   }
}
export { PostUserRegister , HandleEmailOtp ,HandlePasswordReset,HandlePasswordResetOtp}