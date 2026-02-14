import express from "express"
import dotenv from "dotenv"

const app = express()
dotenv.config()
const port = process.env.PORT

app.use(express.json())

app.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"Server running"
    })
})


app.listen(port)