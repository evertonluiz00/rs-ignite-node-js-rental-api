import { Category } from "../models/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {

    create({ name, description}: ICreateCategoryDTO): Category {
        console.log(name, description);
        throw new Error("Method not implemented.");
    }

    listAll(): Category[] {
        throw new Error("Method not implemented.");
    }

    findByName(name: string): Category | null {
        throw new Error("Method not implemented.");
    }
}

export { PostgresCategoriesRepository };
