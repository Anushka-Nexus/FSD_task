import dotenv from "dotenv"
import { UserModel } from "../Models/UserSchema.js"
import jwt from "jsonwebtoken"


dotenv.config({ path: "./config.env" })

const authUser = async (req, res, next) => {
    try {

        let { token } = req.headers

        if (!token) throw ("invalid token data !")

        //console.log(token)

        // decoding the token

        let decode = jwt.verify(token, process.env.JWT_SECRET_TOKEN)

        //console.log(decode)

        let user = await UserModel.findOne({ "Email.Email": decode.Email })

        if (!user) throw ("invalid token !")

        req.user = user

        next()
    } catch (err) {
        console.log("error while auth user :", err)
        res.status(400).json({ messsage: "can't allow user access ", err })
    }
}

export { authUser }