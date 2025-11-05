import express from "express"
import dotenv from "dotenv"

//connecting routes
import {routes} from "./Router/Routes.js"
//connecting db
import "./Database/Connection.js"

dotenv.config({ path: "./config.env" })
let port = process.env.PORT 

//instance of express
const app= express()

app.use(express.static("public"))

//reads form data
app.use(express.urlencoded({ extended: true }))

//to parse the json onto the server
app.use(express.json())

//endpoint
app.use("/APIs", routes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})