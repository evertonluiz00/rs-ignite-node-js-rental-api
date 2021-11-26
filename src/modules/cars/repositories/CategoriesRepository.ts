import { Category } from '../models/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from '../interfaces/ICategoriesRepository';
import { getRepository, Repository } from 'typeorm';

class CategoriesRepository implements ICategoriesRepository {

    private repository: Repository<Category>

    constructor() {
        this.repository = getRepository(Category);
    }

    public async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
        const category = this.repository.create({name, description});
        await this.repository.save(category);
        return category;
    }

    public async listAll(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }

    public async findByName(name: string): Promise<Category | null> {
        const category = await this.repository.findOne({ name });
        return category || null;
    }
}

export { CategoriesRepository };
