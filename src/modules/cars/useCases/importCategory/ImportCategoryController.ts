import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { file } = request;

            const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
            const categories = await importCategoryUseCase.execute(file);

            return response.status(201).json(categories);

        } catch (e: any) {

            return response.status(400).json({ error: e.message });
        }
    }

}

export { ImportCategoryController };
