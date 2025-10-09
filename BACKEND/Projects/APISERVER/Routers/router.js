import express from "express"
import { IntroApi , allLanguages, RandomLanguages ,FilteredLanguages} from "../Controller/Controls.js"
 
const route = express.Router()

route.get("/",(request,response)=>{
   response.status(301).redirect("/api/techs/IntroApi")
})

route.get("/IntroApi", IntroApi)

route.get("/allLanguages",allLanguages)

route.get("/RandomLanguages",RandomLanguages)

route.get("/Filters",FilteredLanguages)



export {route}