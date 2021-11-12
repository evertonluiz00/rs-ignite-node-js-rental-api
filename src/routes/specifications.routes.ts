import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRouter = Router();
const specificationsRepository = new SpecificationsRepository()

// POST
specificationsRouter.post('/', (request, response) => {
    try {

        const { name, description } = request.body;

        const createSpecificationService =  new CreateSpecificationService(specificationsRepository);
        const specification = createSpecificationService.execute({name, description});

        return response.status(201).json(specification);

    } catch (e: any) {

        return response.status(400).json({ error: e.message });
    }
});

// GET
specificationsRouter.get("/", (request, response) => {
    const specifications = specificationsRepository.listAll();

    return response.status(201).json(specifications);
});


export default specificationsRouter;
