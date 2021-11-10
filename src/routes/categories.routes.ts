import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

// POST
categoriesRouter.post("/", (request, response) => {
    try {

        const { name, description } = request.body;

        const createCategoryService =  new CreateCategoryService(categoriesRepository);
        const category = createCategoryService.execute({name, description});

        return response.status(201).json(category);

    } catch (e: any) {

        return response.status(400).json({ error: e.message });
    }
});

// GET
categoriesRouter.get("/", (request, response) => {
    const categories = categoriesRepository.listAll();

    return response.status(201).json(categories);
});

export default categoriesRouter;
