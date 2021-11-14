import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRouter = Router();

// POST
categoriesRouter.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

// GET
categoriesRouter.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
});

export default categoriesRouter;
