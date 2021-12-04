import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { IUsersRepository } from "../../interfaces/IUsersRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string,
        email: string
    },
    token: string
}


@injectable()
class AuthenticateUserUseCase {

    private usersRepository: IUsersRepository;

    constructor(@inject("UsersRepository") usersRepository: IUsersRepository) {
        this.usersRepository = usersRepository;
    }


    async execute({ email, password }: IRequest): Promise<IResponse> {

        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new Error("Email or password invalid!");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email or password invalid!");
        }

        const token = sign({}, "MinhaChaveSecretaParaToken", { subject: user.id, expiresIn: "1d" });

        const tokenReturn: IResponse = {
            user: {
                name: user.name,
                email: user.email
            },
            token
        };

        return tokenReturn;

    }
}

export { AuthenticateUserUseCase }
