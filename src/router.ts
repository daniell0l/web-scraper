import { Router } from "express";

import { CreateProductController } from "./controller/createProductController";
import { DeleteProductController } from "./controller/deleteProductController";
import { GetAllProductsController } from "./controller/getAllProductsController";
import { GetOneProductController } from "./controller/getOneProductController";
import { UpdateProductController } from "./controller/updateProductController";

const router = Router()

router.get("/products", new GetAllProductsController().handle);
router.get("/products/:id", new GetOneProductController().handle);
router.post("/products", new CreateProductController().handle);
router.delete("/products/:id", new DeleteProductController().handle);
router.put("/products/:id", new UpdateProductController().handle);

export  { router }
