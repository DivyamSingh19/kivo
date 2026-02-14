import { Request,Response,NextFunction } from "express";


export const authMiddleware = async (req:Request,res:Response,next:NextFunction) => {
    const token = req.cookies.access_token
    if(!token){
        
    }
    try {
        
    } catch (error) {
        
    }
}