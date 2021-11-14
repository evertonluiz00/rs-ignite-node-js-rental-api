import { Request, Response } from 'express';
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

class ListSpecificationsController {

    private listSpecificationsUseCase: ListSpecificationsUseCase;

    constructor(listSpecificationsUseCase: ListSpecificationsUseCase) {
        this.listSpecificationsUseCase = listSpecificationsUseCase;
    }

    handle(request: Request, response: Response): Response {
        const specifications = this.listSpecificationsUseCase.execute()

        return response.status(201).json(specifications);
    }

}

export { ListSpecificationsController };
