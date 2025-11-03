import mongoose from "mongoose";
import bcrypt from "bcrypt"

let EmailObject = {
    Email:"",
    Verified:false
}

let AddressObject = {
    Street: "",
    Landmark: "",
    City: "",
    State: "",
    Country: "",
    Pincode: ""
}

let UserSchema = mongoose.Schema(
    {
        Name : {
            type : String,
            required:true
        },
        Phone :{
            type:String,
            required:true
        },
        Email :{
            type:Object,
            required:true,
            default:EmailObject
        },
        Address :{
            type:Object,
            required:true,
            default:AddressObject
        },
        Password :{
            type:String,
            required:true
        },
        TimeStamp:{
            type:Date,
            default:Date.now
        }

    }
)
UserSchema.pre("save", async function () {
    this.Password = await bcrypt.hash(this.Password, 12)
})
let UserModel = new mongoose.model("Users", UserSchema)
export {UserModel}