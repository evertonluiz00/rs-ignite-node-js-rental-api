import { Router } from "express";
import multer from "multer";
import createCategoryController from "../modules/cars/useCases/createCategory";
//import listCategoriesController from "../modules/cars/useCases/listCategories";
//import { importCategoryController } from "../modules/cars/useCases/importCategory";

const categoriesRouter = Router();
const upload = multer({ dest: './tmp' });


// POST
categoriesRouter.post("/", (request, response) => {
    return createCategoryController().handle(request, response);
});

/*categoriesRouter.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
});*/


// GET
/*categoriesRouter.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
});*/


export default categoriesRouter;
