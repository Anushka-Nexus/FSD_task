import express from `express`

import {getHome} from `./Controllers/controls.js`

const route = express.Router()

route.get("/",getHome)

export{route}