import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import * as bcrypt from 'bcrypt';

export class CreateUserController {
    async handle(req: Request, res: Response) {
        let { name, email, password } = req.body;

        const user = await prismaClient.user.findFirst({
            where : {
                email
            }
        })
        if( user ) return res.status(400).json({
            "message" : "E-mail já cadastrado"
        })

        password =  bcrypt.hashSync(password, 10)
        const User = await prismaClient.user.create({
            data: {
                name,
                email,
                password
            }
        })
        return res.json(User);
    }
}