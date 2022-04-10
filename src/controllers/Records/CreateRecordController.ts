import {Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient"

export class CreateRecordController {
  async handle( req: Request, res: Response) {

    const  { colaboratorId } = req.params 
    const record = await prismaClient.record.create({
      data: {
        colaboratorId
      }
    })
    return res.json(record);
  }
}