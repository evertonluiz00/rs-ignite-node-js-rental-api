import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {

    private createCategoryUseCase: CreateCategoryUseCase;

    constructor(createCategoryUseCase: CreateCategoryUseCase) {
        this.createCategoryUseCase = createCategoryUseCase;
    }

    handle(request: Request, response: Response): Response {
        try {

            const { name, description } = request.body;
            const category = this.createCategoryUseCase.execute({name, description});

            return response.status(201).json(category);

        } catch (e: any) {

            return response.status(400).json({ error: e.message });
        }
    }

}

export { CreateCategoryController };
