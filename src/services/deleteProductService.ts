import  { readFile, writeFile } from "../database/functions"

export class DeleteProductService {
  async execute(id: string) {
    const currentData = await readFile()
  
    const product = await currentData.findIndex((item: { id: string; }) => item.id == id)
  
    currentData.splice(product, 1)
  
    writeFile(currentData)
  }
}