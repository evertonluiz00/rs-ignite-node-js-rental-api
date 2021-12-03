import { getRepository, Repository } from "typeorm";
import { IUsersRepository } from "../interfaces/IUsersRepository";
import { ICreateUserDTO } from '../dtos/ICreateUserDto';
import { User } from "../models/User";


class UsersReposotory implements IUsersRepository {

    private repository: Repository<User>;

    constructor(){
        this.repository = getRepository(User);
    }

    async create({ name, username, email, password, driver_license }: ICreateUserDTO): Promise<User> {

        const user = this.repository.create({
            name,
            username,
            email,
            password,
            driver_license
        });

        await this.repository.save(user);

        return user;
    }

}

export { UsersReposotory }
