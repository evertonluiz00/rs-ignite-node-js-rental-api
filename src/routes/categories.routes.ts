import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

// POST
categoriesRouter.post("/", (request, response) => {
    const { name, description } = request.body;

    const categoryAlreadyExists = categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
        return response.status(400).json({ error: "Category already exists!" });
    }

    const category = categoriesRepository.create({ name, description });

    return response.status(201).json(category);
});

// GET
categoriesRouter.get("/", (request, response) => {
    const categories = categoriesRepository.listAll();

    return response.status(201).json(categories);
});

export default categoriesRouter;
