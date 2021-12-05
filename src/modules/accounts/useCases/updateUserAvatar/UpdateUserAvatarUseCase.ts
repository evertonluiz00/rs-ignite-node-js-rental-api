import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../interfaces/IUsersRepository"
import { deleteFile } from '../../../../utils/file';


interface IRequest {
    user_id: string;
    avatar_file: string;
}


@injectable()
class UpdateUserAvatarUseCase {

    private usersRepository: IUsersRepository;

    constructor(@inject("UsersRepository") usersRepository: IUsersRepository) {
        this.usersRepository = usersRepository;
    }


    async execute({ user_id, avatar_file }: IRequest): Promise<void> {
        const user = await this.usersRepository.findById(user_id);

        if (!user) {
            throw new AppError("User does not exist!");
        }

        if (user.avatar) {
            await deleteFile(`./tmp/avatar/${user.avatar}`);
        }

        user.avatar = avatar_file;
        await this.usersRepository.create(user);
    }
}

export { UpdateUserAvatarUseCase }