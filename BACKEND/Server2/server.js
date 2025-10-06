 import express, { urlencoded } from "express";
  const app = express();
 import dotenv from 'dotenv';
   

 import {route} from './Routers/router.js';

 dotenv.config({ path: "./config.env" });

 let port = process.env.PORT;

 app.use(express.static("Public"))

 app.set('views', './View');
 //app- instance of express
 //set - Iska matlab hai: kuch setting set karni hai app ke liye.
 //views- Express ko batata hai ki views (templates) kis folder mein hain.
 //./View - Templates View naam ke folder mein hain
 app.set('view engine', 'ejs');

 app.use(express.urlencoded({extended:true}))
//form data read krta h
 app.use(route);

 app.listen(port, () => {
    console.log(`server is running on port ${port} !`)
})