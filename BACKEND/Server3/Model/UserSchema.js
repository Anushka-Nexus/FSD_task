import mongoose from "mongoose"
 
const addressformat = { street :"",landmark :"", city:"",state:"",country :"",pincode:""}

let UserSchema = mongoose.Schema(
    {
        name : {
            type :String
        },
         phone : {
            type :String
        },
        email:{
            type:String
        },
        address :{
            type:Object,
            default:addressformat
        },
        Timestamp :{
            type : String,
            default: Date.now()
        }
    }
)

let UserModel=("Users", UserSchema)

export {UserModel}