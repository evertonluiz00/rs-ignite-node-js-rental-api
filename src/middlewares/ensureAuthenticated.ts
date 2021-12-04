import { NextFunction, Request, Response } from "express";
import { verify  } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authorizationHeader = request.headers.authorization;

    if (!authorizationHeader) {
        throw new AppError("Token missing!", 401);
    }

    const [, token] = authorizationHeader.split(" ");

    try {

        const { sub: user_id } = verify(token, "MinhaChaveSecretaParaToken") as IPayload;
        next();

        const usersRepository = new UsersRepository();
        const user = usersRepository.findById(user_id);

        if (!user) {
            throw new AppError("User does not exist!", 401);
        }

    } catch (e: any) {

        throw new AppError("Invalid token!", 401);
    }

}
