import { inject, injectable } from 'tsyringe'
import { Specification } from "../../models/Specification";
import { ISpecificationsRepository } from "../../interfaces/ISpecificationsRepository";

interface RequestDTO {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {

    private specificationsRepository: ISpecificationsRepository;

    constructor(@inject("SpecificationsRepository") specificationsRepository: ISpecificationsRepository) {
        this.specificationsRepository = specificationsRepository;
    }

    public execute({ name, description }: RequestDTO): Specification {

        const specificationAlreadyExists = this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification already exists!");
        }

        const specification = this.specificationsRepository.create({ name, description });
        return specification;
    }

 }

 export { CreateSpecificationUseCase };
