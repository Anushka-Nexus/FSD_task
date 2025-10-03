 import express, { urlencoded } from "express";
  const app = express();
 import dotenv from 'dotenv';
   

 import {route} from './Routers/router.js';

 dotenv.config({ path: "./config.env" });

 let port = process.env.PORT;

 app.use(express.static("Public"))

 app.set('views', './View');
 app.set('view engine', 'ejs');

 app.use(express.urlencoded({extended:true}))

 app.use(route);

 app.listen(port, () => {
    console.log(`server is running on port ${port} !`)
})