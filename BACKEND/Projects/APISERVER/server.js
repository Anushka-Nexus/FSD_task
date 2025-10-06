import express, { json, request, urlencoded } from "express"
import dotenv from "dotenv"
import {route} from "./Routers/router.js"
import { RootController} from "./Controller/RootControls.js"
const app= express()
//instance of express

dotenv.config({ path: "./config.env" });
 //Loads .env file contents into process.env by default

 let port = process.env.PORT;

 app.use(express.static("Public"))

 app.use(express.json())

 app.use(express.urlencoded({extended:true}))
 //form data read

 app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
 })

 app.use((request,response)=>{
   response.status(404).json({message :"Sorry! The content is not found!"})
 })
 //Agar koi bhi route match na ho, toh "content not found" wala 404 error bhejega

 app.use("/api/techs",route)
 //Routes starting with /api/techs are handled by the router.

 app.use("/",RootController)
 //Root URL pr request jo bhi aaygi vo RootController handel krega