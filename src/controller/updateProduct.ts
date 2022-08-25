/* import { Request, Response } from "express";
import  { readFile, writeFile } from "../database/functions"


router.put("/products/:id", async (request: Request, response: Response) => {
  const { id } = request.params
  if (!id) return response.status(400).json({ message: 'id is required!' })

  const { description, price, reviews, title } = request.body

  const currentData = readFile()

  const getItem = currentData.findIndex((item: { id: string; }) => item.id == id)

  if (!getItem) return response.status(400).json({ message: "item not exists!" })

  const {
    id: newId,
    description: newDescription,
    price: newPrice,
    reviews: newReviews,
    title: newTitle
  } = currentData[getItem]

  const newObject = {
    id: id ? id : newId,
    description: description ? description : newDescription,
    price: price ? price : newPrice,
    reviews: reviews ? reviews : newReviews,
    title: title ? title : newTitle
  }

  currentData[getItem] = newObject
  writeFile(currentData)

  return response.status(201).json(newObject)
});
 */