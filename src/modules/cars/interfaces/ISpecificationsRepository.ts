import { Specification } from "../models/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ name, description}: ICreateSpecificationDTO): Specification;
    listAll(): Specification[];
    findByName(name: string): Specification | null;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
