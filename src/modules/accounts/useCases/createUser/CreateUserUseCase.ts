import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDto";
import { IUsersRepository } from "../../interfaces/IUsersRepository";
import { User } from "../../models/User";

@injectable()
class CreateUserUseCase {

    private usersRespository: IUsersRepository;

    constructor(@inject("UsersRepository") usersRespository: IUsersRepository ){
        this.usersRespository = usersRespository;
    }


    async execute({ name, username, password, email, driver_license }: ICreateUserDTO): Promise<User> {

        const user = await this.usersRespository.create({ name, username, password, email, driver_license });
        return user;
    }
}

export { CreateUserUseCase }
