import { inject, injectable } from 'tsyringe'
import { Category } from "../../models/Category";
import { ICategoriesRepository } from "../../interfaces/ICategoriesRepository";
import { AppError } from '../../../../errors/AppError';

interface RequestDTO {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {

    private categoriesRepository: ICategoriesRepository;

    constructor(@inject("CategoriesRepository") categoriesRepository: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    public async execute({ name, description }: RequestDTO): Promise<Category> {

        const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new AppError("Category already exists!");
        }

        const category = await this.categoriesRepository.create({ name, description });
        return category;
    }
}

export { CreateCategoryUseCase };
