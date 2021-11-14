import { Specification } from '../models/Specification';
import { ISpecificationsRepository, ICreateSpecificationDTO } from '../interfaces/ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {

    private specifications: Specification[] = [];
    private static INSTANCE: SpecificationsRepository;

    private constructor() {
        this.specifications = [];
    }

    public static getInstance(): SpecificationsRepository {
        if (!SpecificationsRepository.INSTANCE) {
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }
        return SpecificationsRepository.INSTANCE;
    }

    public create({ name, description }: ICreateSpecificationDTO): Specification {
        const specification = new Specification(name, description);
        this.specifications.push(specification);
        return specification;
    }

    public listAll(): Specification[] {
        return this.specifications;
    }

    public findByName(name: string): Specification | null {
        const specification = this.specifications.find((spec) => spec.name === name);
        return specification || null;
    }
}

export { SpecificationsRepository };
