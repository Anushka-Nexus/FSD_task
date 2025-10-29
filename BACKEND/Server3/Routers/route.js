import express from "express"
import { main } from "../Controller/control.js"

const routes = express.Router()

routes.get("/test", main)

export {routes}