import { AuthController } from "../controllers/auth";
import express,{Request,Response,NextFunction} from "express"

const auth = new AuthController()
const router = express.Router()





export default router