import { readFile, writeFile } from "../database/functions";

  type ProductRequest = {
    description: string;
    price: string;
    reviews: string;
    title: string;
  }

  export class CreateProductService {
    async execute({ description, price, reviews, title }: ProductRequest): Promise<any> {
        const currentData = readFile()

        const id = Math.random().toString(32).substring(2, 9)
        
        const product = currentData.push({
          id,
          description,
          price,
          reviews,
          title
        });

        writeFile(currentData)

        return product;
    }
}

