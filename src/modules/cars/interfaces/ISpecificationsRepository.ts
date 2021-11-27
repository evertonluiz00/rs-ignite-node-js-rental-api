import { Specification } from "../models/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ name, description}: ICreateSpecificationDTO): Promise<Specification>;
    listAll(): Promise<Specification[]>;
    findByName(name: string): Promise<Specification | null>;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
