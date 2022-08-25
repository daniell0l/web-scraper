import { Request, Response } from "express";
import  { readFile, writeFile } from "../database/functions"

export class CreateProductController {
  handle(request: Request, response: Response) {
    const { description, price, reviews, title } = request.body
  
    const currentData = readFile()
  
    const id = Math.random().toString(32).substring(2, 9)
  
    currentData.push({ id, description, price, reviews, title })
  
    writeFile(currentData)
  
    response.status(201).json({ id, description, price, reviews, title })
  }
}

