import { Category } from "../../models/Category";
import { ICategoriesRepository } from "../../interfaces/ICategoriesRepository";

interface RequestDTO {
    name: string;
    description: string;
}

class CreateCategoryUseCase {

    private categoriesRepository: ICategoriesRepository;

    constructor(categoriesRepository: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    public execute({ name, description }: RequestDTO): Category {

        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already exists!");
        }

        const category = this.categoriesRepository.create({ name, description });
        return category;
    }
}

export { CreateCategoryUseCase };
