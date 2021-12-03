import { User } from '../models/User'
import { ICreateUserDTO } from '../dtos/ICreateUserDto'


interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<User>
}

export { IUsersRepository}
