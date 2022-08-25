import { Request, Response } from "express";
import { CreateProductService }  from '../services/createProductService';

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { description, price, reviews, title } = request.body
  
    const service = new CreateProductService()

    const result = await service.execute({ description, price, reviews, title });

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(201).json({ description, price, reviews, title })
  }
}
