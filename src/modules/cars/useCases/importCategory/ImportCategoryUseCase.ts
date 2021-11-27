import fs from 'fs';
import { parse } from 'csv-parse';
import { ICategoriesRepository } from '../../interfaces/ICategoriesRepository';
import { inject, injectable } from 'tsyringe';

interface IImportCategory {
    name: string;
    description: string
}

@injectable()
class ImportCategoryUseCase {

    private categoriesRepository: ICategoriesRepository;

    constructor(@inject("CategoriesRepository") categoriesRepository: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {

        return new Promise((resolve, reject) => {
            const categories: IImportCategory[] = [];
            const stream = fs.createReadStream(file.path);
            const parseFile = parse();

            stream.pipe(parseFile);

            parseFile
                .on("data", async (line) => {
                    const [name, description] = line;
                    const category = {
                        name,
                        description
                    };

                    categories.push(category);
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(categories);
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File | any): Promise<IImportCategory[]> {
        const categories = await this.loadCategories(file);

        categories.map(async (category) => {

            const { name, description } = category;
            const existsCategory = await this.categoriesRepository.findByName(name);

            if (!existsCategory) {
                await this.categoriesRepository.create({ name, description });
            }
        });

        return categories;
    }
}

export { ImportCategoryUseCase };
