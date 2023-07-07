import {IUserRepository, IUserService} from "./user.interface";
import { CreateUserDto } from "./dto/create-user.dto";
import {IUserDomain} from "./models/user-domain.model";
import {Domain, Where} from "../database/database.interface";
import {UpdateUserDto} from "./dto/update-user.dto";
import {ITokenService} from "../token/token.interface";
import {ITokenDomain} from "../token/models/token-domain.model";

export class UserService implements IUserService {
    constructor(private readonly userRepository: IUserRepository,
                private readonly tokenService: ITokenService) {}

    async create(createDto: CreateUserDto): Promise<Domain<IUserDomain>> {
        const user: IUserDomain = await this.userRepository.create(createDto);
        const token: ITokenDomain = await this.tokenService.create(user.id);

        return user;
    }

    delete(where: Where<IUserDomain>): Promise<number> {
        return this.userRepository.delete(where);
    }

    findMany(where: Where<IUserDomain>): Promise<IUserDomain[]> {
        return this.userRepository.findMany(where);
    }

    findOne(where: Where<IUserDomain>): Promise<Domain<IUserDomain>> {
        return this.userRepository.findOne(where);
    }

    update(where: Where<IUserDomain>, updateDto: UpdateUserDto): Promise<Domain<IUserDomain>> {
        return this.userRepository.update(where, updateDto);
    }

}