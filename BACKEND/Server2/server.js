 import express from `express`
  const app = express()
 import dotenv from `dotenv`
   

 import route from `./Routers/router`

 dotenv.config({ path: "./config.env" })

 let port = process.env.PORT

 app.use(express.static("Public"))

 app.use(route)

 app.listen(port, () => {
    console.log(`server is running on port ${port} !`)
})