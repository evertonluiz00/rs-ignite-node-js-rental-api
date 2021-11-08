import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

// POST
categoriesRouter.post("/", (request, response) => {
    const { name, description } = request.body;

    const createCategoryService =  new CreateCategoryService(categoriesRepository);
    const category = createCategoryService.execute({name, description});

    return response.status(201).json(category);
});

// GET
categoriesRouter.get("/", (request, response) => {
    const categories = categoriesRepository.listAll();

    return response.status(201).json(categories);
});

export default categoriesRouter;
