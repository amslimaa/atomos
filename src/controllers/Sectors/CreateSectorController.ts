import {Request, Response} from "express"
import { prismaClient } from "../../database/prismaClient";


export class CreateSectorController  {
  async handle(req: Request, res: Response) {
   const { id, cod, description } = req.body;
   const sector = await prismaClient.sector.create({
     data:{ id, cod, description }
   })
   return res.json(sector)
  }
}