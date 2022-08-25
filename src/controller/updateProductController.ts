import { Request, Response } from "express";
import { UpdateProductService } from "../services/updateProductService";

export class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { description, price, reviews, title } = request.body
  
    const service = new UpdateProductService()

    const result = await service.execute({id, description, price, reviews, title})

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }
  
    return response.status(201).json(result)
  }
}

