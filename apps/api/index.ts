import express,{Request,Response} from "express"
import dotenv from "dotenv"

const app = express()
dotenv.config()
const port = process.env.PORT

app.use(express.json())

app.get("/",(req:Request,res:Response)=>{
    res.json({
        success:true,
        message:"Server running"
    })
})


app.listen(port)