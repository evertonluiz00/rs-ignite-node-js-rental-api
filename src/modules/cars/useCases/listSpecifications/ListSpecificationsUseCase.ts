import { inject, injectable } from 'tsyringe';
import { ISpecificationsRepository } from "../../interfaces/ISpecificationsRepository";
import { Specification } from "../../models/Specification";

@injectable()
class ListSpecificationsUseCase {

    private specificationsRepository: ISpecificationsRepository;

    constructor(@inject("SpecificationsRepository") specificationsRepository: ISpecificationsRepository) {
        this.specificationsRepository = specificationsRepository;
    }

    public async execute(): Promise<Specification[]> {
        const specifications = await this.specificationsRepository.listAll();
        return specifications;
    }
}

export { ListSpecificationsUseCase };
