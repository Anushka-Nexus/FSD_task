import express from "express"
import {PostUserRegister} from "../Controllers/Control.js"
const routes = express.Router()

routes.post("/UserRegistration", PostUserRegister)

export {routes}