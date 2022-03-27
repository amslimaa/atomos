import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

import * as bcrypt from 'bcrypt';

import jwt from "jsonwebtoken";
import { authConfig } from "../../config/Auth";

export class CreateSessionController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        const user = await prismaClient.user.findFirst({
            where: {email}
        })
        if(!user){
            return res.status(401).json({ error: "E-mail não cadastrado"})
        }
        const isValidPassword = await bcrypt.compare(password, user.password)
        if(!isValidPassword){
            return res.status(401).json( {error : "Senha inválida"});
        }
        const { id, name } = user
        return res.json({
            user: {
                id,
                name,
                email
            },
            token : jwt.sign({id}, authConfig.secret, {
                expiresIn: authConfig.expiresIn
            })
        })
    }
}