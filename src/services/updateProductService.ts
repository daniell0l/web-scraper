import  { readFile, writeFile } from "../database/functions"

type  ProductRequest = {
    id: string;
    description: string;
    price: string;
    reviews: string;
    title: string;
}

export class UpdateProductService {
    async execute({id, description, price, reviews, title }: ProductRequest): Promise<any> {  
    const currentData = readFile()
  
    const product = currentData.findIndex((item: { id: string; }) => item.id == id)
    
    const {
      id: newId,
      description: newDescription,
      price: newPrice,
      reviews: newReviews,
      title: newTitle
    } = currentData[product]
  
    const newObject = {
      id: id ? id : newId,
      description: description ? description : newDescription,
      price: price ? price : newPrice,
      reviews: reviews ? reviews : newReviews,
      title: title ? title : newTitle
    }
  
    currentData[product] = newObject
    
    writeFile(currentData)
  
    return (newObject)
  }
}