import { Category } from '../models/Category';

interface ICreateCategoryDto {
    name: string;
    description: string;
}

class CategoriesRepository {
    private categories: Category[] = [];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICreateCategoryDto): Category {
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
