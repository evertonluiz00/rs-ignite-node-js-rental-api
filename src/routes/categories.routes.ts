import { Router } from "express";
import multer from "multer";
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";

const categoriesRouter = Router();
const upload = multer({ dest: './tmp' });

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();


// POST
categoriesRouter.post("/", createCategoryController.handle);
categoriesRouter.post("/import", upload.single("file"), importCategoryController.handle);


// GET
categoriesRouter.get("/", listCategoriesController.handle);


export default categoriesRouter;
