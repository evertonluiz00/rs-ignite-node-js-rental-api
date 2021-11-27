import { inject, injectable } from 'tsyringe';
import { ICategoriesRepository } from "../../interfaces/ICategoriesRepository";
import { Category } from "../../models/Category";

@injectable()
class ListCategoriesUseCase {

    private categoriesRepository: ICategoriesRepository;

    constructor(@inject("CategoriesRepository") categoriesRepository: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    public async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepository.listAll();
        return categories;
    }
}

export { ListCategoriesUseCase };
