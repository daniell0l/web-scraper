import { Request, Response } from "express";
import  { readFile } from "../database/functions"



export class GetOneProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
  
    const currentData = readFile()
  
    const getItem = currentData.find((item: { id: string; }) => item.id == id)
    
    return response.status(200).json(getItem)
  }
}


