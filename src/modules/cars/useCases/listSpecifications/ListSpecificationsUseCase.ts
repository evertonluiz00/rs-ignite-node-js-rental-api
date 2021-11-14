import { ISpecificationsRepository } from "../../interfaces/ISpecificationsRepository";
import { Specification } from "../../models/Specification";


class ListSpecificationsUseCase {

    private specificationsRepository: ISpecificationsRepository;

    constructor(specificationsRepository: ISpecificationsRepository) {
        this.specificationsRepository = specificationsRepository;
    }

    public execute(): Specification[] {
        const specifications = this.specificationsRepository.listAll();
        return specifications;
    }
}

export { ListSpecificationsUseCase };
