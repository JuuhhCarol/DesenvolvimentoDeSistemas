import type { Request, Response, NextFunction } from "express";

export const validateRegister = (req: Request, res: Response, next: NextFunction) =>{
    const {name, lastname,age} = req.body
    if(!name ||!age){
        return res.status(400).send({respose: "dados vazios"})
    }
}