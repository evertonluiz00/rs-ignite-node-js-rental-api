import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";

export default(): CreateCategoryController => {

    const categoriesRepository = new CategoriesRepository();
    const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
    const createCategoryController = new CreateCategoryController(createCategoryUseCase);

    return createCategoryController;
};
