import { Router } from "express";
import { GetAllProductsController } from "./controller/getAllProductsController";
import { GetOneProductController } from "./controller/getOneProductController";

const router = Router()

router.get("/products", new GetAllProductsController().handle);
router.get("/products/:id", new GetOneProductController().handle);
/* routes.post("/products", new CreateCategoryController().handle);
routes.delete("/products/:id", new DeleteCategoryController().handle);
routes.put("/products/:id", new UpdateCategoryController().handle); */








export  { router }

