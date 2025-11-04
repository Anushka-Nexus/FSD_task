import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" })

async function connect() {
    try {
        await mongoose.connect(process.env.CONNECTIONSTRING)
        console.log("Connected successfully to the mongodb!")
    } catch (error) {
        console.log("Could't connect the database", error)
    }
}

connect()