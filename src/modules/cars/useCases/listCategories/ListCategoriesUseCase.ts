import { ICategoriesRepository } from "../../interfaces/ICategoriesRepository";
import { Category } from "../../models/Category";


class ListCategoriesUseCase {

    private categoriesRepository: ICategoriesRepository;

    constructor(categoriesRepository: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    public async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepository.listAll();
        return categories;
    }
}

export { ListCategoriesUseCase };
