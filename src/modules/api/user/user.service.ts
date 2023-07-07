import {Injectable} from "@nestjs/common";
import {UserService as UserCore} from "../../../core/user/user.service";
import {IUserService} from "../../../core/user/user.interface";
import {TokenService} from "../../token/token.service";
import {UserMockRepository} from "../../../core/user/repositories/user-mock.repository";
import {CreateUserDto} from "../../../core/user/dto/create-user.dto";
import {IUserDomain} from "../../../core/user/models/user-domain.model";
import {Domain, Where} from "../../../core/database/database.interface";
import {UpdateUserDto} from "../../../core/user/dto/update-user.dto";
import {UserDatabaseRepository} from "./repository/user.repository";

@Injectable()
export class UserService implements IUserService {

    private readonly userCore: IUserService;

    constructor(private readonly tokenService: TokenService,
                private readonly userDatabaseRepository: UserDatabaseRepository) {
        this.userCore = new UserCore(this.userDatabaseRepository, this.tokenService);
    }

    create(createDto: CreateUserDto): Promise<Domain<IUserDomain>> {
        return this.userCore.create(createDto);
    }

    delete(where: Where<IUserDomain>): Promise<number> {
        return this.userCore.delete(where);
    }

    findMany(where: Where<IUserDomain>): Promise<IUserDomain[]> {
        return this.userCore.findMany(where);
    }

    findOne(where: Where<IUserDomain>): Promise<Domain<IUserDomain>> {
        return this.userCore.findOne(where);
    }

    update(where: Where<IUserDomain>, updateDto: UpdateUserDto): Promise<Domain<IUserDomain>> {
        return this.userCore.update(where, updateDto);
    }

}