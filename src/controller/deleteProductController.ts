import { Request, Response } from "express";
import { DeleteProductService } from "../services/deleteProductService";

export class DeleteProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const service = new DeleteProductService()

    const result = await service.execute(id)

    return response.status(200).json({message: 'delete with success'})
  }
}