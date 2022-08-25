import { Request, Response } from "express";
import { GetAllProductService } from "../services/getAllProductsService";
export class GetAllProductsController {
  async handle(request: Request, response: Response) {
    const service = new GetAllProductService()

    const result = await service.execute()

    return response.json(result)  
    
  }
}