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

    create({ name, description }: ICreateCategoryDto): void {
        const category = new Category(name, description);

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category | undefined {
        const category = this.categories.find((category) => category.name === name);

        return category;
    }
}

export { CategoriesRepository };
