import { Category } from '../models/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from '../interfaces/ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {

    private categories: Category[] = [];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICreateCategoryDTO): Category {
        const category = new Category(name, description);
        this.categories.push(category);
        return category;
    }

    listAll(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category | null {
        const category = this.categories.find((category) => category.name === name);
        return category || null;
    }
}

export { CategoriesRepository };
