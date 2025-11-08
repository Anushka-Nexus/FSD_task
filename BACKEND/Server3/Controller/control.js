import { UserModel } from "../Model/UserSchema"

const main = (request , response)=>{
    response.status(200).json({message : "loaded successfully!"})
}

const PostRegisterUser=async (request, response)=>{
    try{
       let { name , phone ,email, address }= request.body

       if(!name || !phone ||!email|| !address) throw ("Please fill up all the fields.")

        //check if user exists
     let Registered = await UserModel.findOne({$or : [{"email":email},{"phone":phone}]})
     
        //register new user
       let NewUser = new UserModel({name,phone,email,address})
       //saving into db
       let SaveUser = await NewUser.save()
       
       console.log("Saved data successfully!")
       response.status(202).json({
        message:"Data Saved Successfully!",SaveUser
       })

    }catch(error){
       
        response.status(400).json({ message: "unble to register user !", error })
    }
}
const GetAllUsers=async(req,res)=>{
    let result= await UserModel.find({})
    
    //if db does not have any result to show
    if(result.length==0)throw("Sorry! the Database is empty.")
    res.status(200).json({
        message:"Fetched the data successfully !",result
    })
}
export {main,PostRegisterUser,GetAllUsers}