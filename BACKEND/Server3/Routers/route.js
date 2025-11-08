import express from "express"
import { main , PostRegisterUser,GetAllUsers } from "../Controller/control.js"

const routes = express.Router()

routes.get("/test", main)

routes.post("/PostRegisterNewUser",PostRegisterUser)

routes.get("/GetAllUsers",GetAllUsers)

export {routes}