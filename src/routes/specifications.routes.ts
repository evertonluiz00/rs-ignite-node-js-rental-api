import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListSpecificationsController } from '../modules/cars/useCases/listSpecifications/ListSpecificationsController';

const specificationsRouter = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();


// POST
specificationsRouter.use(ensureAuthenticated);
specificationsRouter.post('/', createSpecificationController.handle);


// GET
specificationsRouter.get("/", listSpecificationsController.handle);


export default specificationsRouter;
