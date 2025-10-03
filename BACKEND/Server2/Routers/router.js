import express from 'express'

import {getHome,getAbout,getContact,getProduct , postform} from '../Controllers/controls.js'

const route = express.Router()

route.get("/",getHome)

route.get("/about",getAbout)

route.get("/contact",getContact)

route.get("/product",getProduct)

route.post("/form1",postform)
//jb user form1 pr data bhejega to postform function call hoga 
export{route}