import { Specification } from '../models/Specification';
import { ISpecificationsRepository, ICreateSpecificationDTO } from '../interfaces/ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {

    private specifications: Specification[] = [];

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificationDTO): Specification {
        const specification = new Specification(name, description);
        this.specifications.push(specification);
        return specification;
    }

    listAll(): Specification[] {
        return this.specifications;
    }

    findByName(name: string): Specification | null {
        const specification = this.specifications.find((spec) => spec.name === name);
        return specification || null;
    }
}

export { SpecificationsRepository };
