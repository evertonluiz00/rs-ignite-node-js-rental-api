import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../modules/cars/interfaces/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/CategoriesRepository';
import { ISpecificationsRepository } from '../../modules/cars/interfaces/ISpecificationsRepository';
import { SpecificationsRepository } from '../../modules/cars/repositories/SpecificationsRepository';
import { IUsersRepository } from '../../modules/accounts/interfaces/IUsersRepository';
import { UsersRepository } from '../../modules/accounts/repositories/UsersRepository';


container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

