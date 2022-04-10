import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
export class CreateColaboratorController {
  async handle (req: Request, res: Response) {
    const {
      cod,
      name,
      birth,
      cpf,
      clt,
      occupation,
      occupationId,
      salt,
    } = req.body
    const colaborator = await prismaClient.colaborator.create({
      data: {
        cod,
        name,
        birth,
        cpf,
        clt,
        occupation,
        occupationId,
        salt,
      }
    });

    return res.json(colaborator);
  }  
}