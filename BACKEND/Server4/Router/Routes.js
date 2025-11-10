import express from "express"
import {PostUserRegister,HandleEmailOtp, HandlePasswordReset, HandlePasswordResetOtp, HandleLogin,GetUserDetails} from "../Controllers/Control.js"
import { authUser } from "../Middleware/Auth.js"

const routes = express.Router()

routes.post("/UserRegistration", PostUserRegister)

routes.post("/VerifyEmail", HandleEmailOtp)

routes.post("/ResetPassword", HandlePasswordReset)

userRouter.post("/VerifyResetPasswordOTP", HandlePasswordResetOtp)

userRouter.post("/login", HandleLogin)

// protected route
userRouter.get("/GetUserInfo/", authUser, GetUserDetails)

export {routes}