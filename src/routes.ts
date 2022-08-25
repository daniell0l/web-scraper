import { Router, Request, Response } from "express";
import  { readFile } from "./database/functions"
import { writeFile } from "./database/functions"

const router = Router();

router.get("/products", (request: Request, response: Response) => {
  const data = readFile()
  response.send(data)
})

router.get("/products/:id", async (request: Request, response: Response) => {
  const { id } = request.params
  if (!id) return response.status(400).json({ message: 'id is required!' })

  const currentData = readFile()

  const getItem = currentData.find((item: { id: string; }) => item.id == id)

  if (!getItem) return response.status(400).json({ message: "product does not exists!" })

  return response.status(200).json(getItem)
});

router.post("/products", async (request: Request, response: Response) => {
  const { description, price, reviews, title } = request.body

  const currentData = readFile()

  const id = Math.random().toString(32).substring(2, 9)

  currentData.push({ id, description, price, reviews, title })

  writeFile(currentData)

  response.status(201).json({ id, description, price, reviews, title })
});

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

router.delete("/products/:id", async (request: Request, response: Response) => {
  const { id } = request.params;
  if (!id) return response.status(404).json({ message: 'id is required!' })

  const currentData = await readFile()

  const getItem = await currentData.findIndex((item: { id: string; }) => item.id == id)

  currentData.splice(getItem, 1)

  writeFile(currentData)

  return response.status(200).json("success")
});

export default router;