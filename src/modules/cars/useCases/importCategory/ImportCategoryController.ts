import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {

    private importCategoryUseCase: ImportCategoryUseCase;

    constructor(importCategoryUseCase: ImportCategoryUseCase) {
        this.importCategoryUseCase = importCategoryUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { file } = request;

            const categories = await this.importCategoryUseCase.execute(file);

            return response.status(201).json(categories);

        } catch (e: any) {

            return response.status(400).json({ error: e.message });
        }
    }

}

export { ImportCategoryController };
