import express from 'express'

import {getHome,getAbout,getContact,getProduct} from '../Controllers/controls.js'

const route = express.Router()

route.get("/",getHome)

route.get("/about",getAbout)

route.get("/contact",getContact)

route.get("/product",getProduct)

export{route}