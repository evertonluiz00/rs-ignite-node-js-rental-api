import { Category } from "../models/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    create({ name, description}: ICreateCategoryDTO): Category;
    listAll(): Category[];
    findByName(name: string): Category | null;
}

export { ICategoriesRepository, ICreateCategoryDTO };
