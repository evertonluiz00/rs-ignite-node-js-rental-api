import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../modules/cars/interfaces/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/CategoriesRepository';
import { ISpecificationsRepository } from '../../modules/cars/interfaces/ISpecificationsRepository';
import { SpecificationsRepository } from '../../modules/cars/repositories/SpecificationsRepository';

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);

