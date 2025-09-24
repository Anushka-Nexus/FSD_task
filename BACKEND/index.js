// importing 
import express from "express"
const app = express()
let port  = 5005

app.get("/",(request,response)=>{
    response.send("Welcome in my home page")
})

app.listen(port,()=>{
    console.log(`server with port ${port} is live`)
})