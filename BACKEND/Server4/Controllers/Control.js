import express from "express"
import {UserModel} from "../Models/UserSchema.js"

let PostUserRegister= async(request,response)=>{
    try{
       let { Name, Phone, Email, Address, Password } = request.body

     if(!Name || !Phone || !Email|| !Address|| !Password) throw("Please fill all required the information!")

     //checking if the user already exist
     let UserExist = await UserModel.findOne(
        {
            $or: [
                {
                 "Email.Email": Email //Email.Email Email object ki Email
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

        let NewUser = new UserModel({ Name, Phone, Email:EmailObject, Address, Password })

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