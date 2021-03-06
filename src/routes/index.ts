import { Router } from "express";
import categoriesRouter from "./categories.routes";
import specificationsRouter from "./specifications.routes";
import usersRouter from "./users.routes";
import authenticateRouter from "./authenticate.routes";

const routes = Router();

routes.use('/categories', categoriesRouter);
routes.use('/specifications', specificationsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', authenticateRouter);

export default routes;
