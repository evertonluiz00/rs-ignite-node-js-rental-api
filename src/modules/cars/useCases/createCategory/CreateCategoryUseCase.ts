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

    public async execute({ name, description }: RequestDTO): Promise<Category> {

        const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already exists!");
        }

        const category = await this.categoriesRepository.create({ name, description });
        return category;
    }
}

export { CreateCategoryUseCase };
