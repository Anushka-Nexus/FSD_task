import express from "express"
import dotenv from "dotenv"
import {routes} from "./Router/Routes.js"
import "./Database/Connection.js"

dotenv.config({ path: "./config.env" })
let port = process.env.PORT 

const app= express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


 app.use("/APIs", routes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})