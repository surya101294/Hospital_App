require("dotenv").config()
const express= require("express")
const { connection } = require("./configuration/db")
const { UserRouter } = require("./Routers/UserRouter")
const { authenticate } = require("./Middleware/Authentication")
const { AppointmentModel } = require("./Models/AppointmentModel")
const { AppointRouter } = require("./Routers/AppointmentRouter")
const app= express()
const cors= require("cors")

const PORT = process.env.port || 8080

app.use(cors())
app.use(express.json())
app.use("/", UserRouter)
app.use(authenticate)
app.use("/appointement", AppointRouter)

app.listen(PORT, async()=>{
    try{
        await connection
        console.log(`connected to DB using port PORT`);
    }catch(err){
        console.log(err);
    }
})