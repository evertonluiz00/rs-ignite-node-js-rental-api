import { getRepository, Repository } from "typeorm";
import { IUsersRepository } from "../interfaces/IUsersRepository";
import { ICreateUserDTO } from '../dtos/ICreateUserDto';
import { User } from "../models/User";


class UsersRepository implements IUsersRepository {

    private repository: Repository<User>;

    constructor(){
        this.repository = getRepository(User);
    }


    async create({ name, email, password, driver_license }: ICreateUserDTO): Promise<User> {

        const user = this.repository.create({
            name,
            email,
            password,
            driver_license
        });

        await this.repository.save(user);
        return user;
    }


    public async findByEmail(email: string): Promise<User | null> {
        const user = await this.repository.findOne({ email });
        return user || null;
    }


    public async findById(id: string): Promise<User | null> {
        const user = await this.repository.findOne(id);
        return user || null;
    }

}

export { UsersRepository }
