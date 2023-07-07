import {IUserRepository} from "./repositories/user-repository.interface";
import {IUserService} from "./user.interface";
import { CreateUserDto } from "./dto/create-user.dto";
import {IUserDomain} from "./models/user-domain.model";
import {Where} from "../database/database.interface";
import {UpdateUserDto} from "./dto/update-user.dto";
import {ITokenService} from "../token/token.interface";
import {ITokenDomain} from "../token/models/token-domain.model";

export class UserService implements IUserService {
    constructor(private readonly userRepository: IUserRepository,
                private readonly tokenService: ITokenService) {}

    async create(createDto: CreateUserDto): Promise<IUserDomain | null> {
        const user: IUserDomain = await this.userRepository.create(createDto);
        const token: ITokenDomain = await this.tokenService.create(user.id);

        return user;
    }

    delete(where: Where<IUserDomain>): Promise<boolean> {
        return Promise.resolve(false);
    }

    findMany(where: Where<IUserDomain>): Promise<IUserDomain[]> {
        return Promise.resolve([]);
    }

    findOne(where: Where<IUserDomain>): Promise<IUserDomain | null> {
        return Promise.resolve(undefined);
    }

    update(where: Where<IUserDomain>, updateDto: UpdateUserDto): Promise<IUserDomain | null> {
        return Promise.resolve(undefined);
    }

}