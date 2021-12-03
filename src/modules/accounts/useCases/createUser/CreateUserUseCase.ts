import { inject, injectable } from "tsyringe";
import { hash} from 'bcrypt';
import { ICreateUserDTO } from "../../dtos/ICreateUserDto";
import { IUsersRepository } from "../../interfaces/IUsersRepository";
import { User } from "../../models/User";

@injectable()
class CreateUserUseCase {

    private usersRespository: IUsersRepository;

    constructor(@inject("UsersRepository") usersRespository: IUsersRepository ){
        this.usersRespository = usersRespository;
    }


    async execute({ name, password, email, driver_license }: ICreateUserDTO): Promise<User> {

        const userAlreadyExists = await this.usersRespository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error("Email already exists!");
        }

        const hashedPassword = await hash(password, 8);

        const user = await this.usersRespository.create({ name, password: hashedPassword, email, driver_license });
        return user;
    }
}

export { CreateUserUseCase }
