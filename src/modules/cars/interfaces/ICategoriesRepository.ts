import { Category } from "../models/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    create({ name, description}: ICreateCategoryDTO): Promise<Category>;
    listAll(): Promise<Category[]>;
    findByName(name: string): Promise<Category | null>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
