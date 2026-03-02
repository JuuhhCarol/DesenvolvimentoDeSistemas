import type { Request, Response } from "express";
import Person from "../models/person.js";

class PersonController {
    static async getUsers(req: Request, res: Response) {
        const users = await Person.find();
        return res.status(200).send({ response: users });
    }

    // static async registerUser(req: Request, res: Response) {
        
    // }
}

export default PersonController;