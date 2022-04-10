import { Request, Response } from "express"
import { prismaClient } from "../../database/prismaClient"

export class CreateOccupationController {
  async handle(req: Request, res: Response) {
   const { cod, description, weekly_workload} = req.body;             
       
   const occupation = await prismaClient.occupation.create({
     data: {
       cod,
       description,
       weekly_workload
     }
   })
   
   return res.json(occupation)
  }
}