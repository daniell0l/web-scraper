import { Request, Response } from "express";
import  { readFile, writeFile } from "../database/functions"

export class DeleteProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    if (!id) return response.status(404).json({ message: 'id is required!' })
  
    const currentData = await readFile()
  
    const getItem = await currentData.findIndex((item: { id: string; }) => item.id == id)
  
    currentData.splice(getItem, 1)
  
    writeFile(currentData)
  
    return response.status(200).json("success")
  }
}

