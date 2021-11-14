import { Request, Response } from 'express';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {

    private createSpecificationUseCase: CreateSpecificationUseCase;

    constructor(createSpecificationUseCase: CreateSpecificationUseCase) {
        this.createSpecificationUseCase = createSpecificationUseCase;
    }

    handle(request: Request, response: Response): Response {
        try {

            const { name, description } = request.body;
            const specification = this.createSpecificationUseCase.execute({ name, description });

            return response.status(201).json(specification);

        } catch (e: any) {

            return response.status(400).json({ error: e.message });
        }
    }

}

export { CreateSpecificationController };
