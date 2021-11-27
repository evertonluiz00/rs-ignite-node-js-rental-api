import { getRepository, Repository } from 'typeorm';
import { Specification } from '../models/Specification';
import { ISpecificationsRepository, ICreateSpecificationDTO } from '../interfaces/ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {

    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    public async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = this.repository.create({ name, description });
        await this.repository.save(specification);
        return specification;
    }

    public async listAll(): Promise<Specification[]> {
        const specifications = await this.repository.find();
        return specifications;
    }

    public async findByName(name: string): Promise<Specification | null> {
        const specification = await this.repository.findOne({ name })
        return specification || null;
    }
}

export { SpecificationsRepository };
