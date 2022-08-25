import { Request, Response } from "express";
import  { readFile } from "../database/functions"


export class GetAllProductsController {
  async handle(request: Request, response: Response) {
    const data = readFile()
    response.send(data)
  }
}
 

