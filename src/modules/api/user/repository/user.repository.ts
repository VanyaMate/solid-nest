import {IUserRepository} from "../../../../core/user/user.interface";
import {Injectable} from "@nestjs/common";
import {CreateUserDto} from "../../../../core/user/dto/create-user.dto";
import {Domain, Where} from "../../../../core/database/database.interface";
import {IUserDomain} from "../../../../core/user/models/user-domain.model";
import {UpdateUserDto} from "../../../../core/user/dto/update-user.dto";
import {DatabaseService} from "../../../database/database.service";
import {DatabaseModels} from "../../../database/database.models";

@Injectable()
export class UserDatabaseRepository implements IUserRepository {

    constructor(private readonly databaseService: DatabaseService) {}

    async create(createDto: CreateUserDto): Promise<Domain<IUserDomain>> {
        const userData: IUserDomain = {
            id: Math.random().toString(),
            login: createDto.login,
            password: createDto.password,
            createdAt: Date.now(),
        }
        const user: boolean = await this.databaseService.create<IUserDomain>(DatabaseModels.USER, userData);
        return userData;
    }

    async delete(where: Where<IUserDomain>): Promise<number> {
        return Promise.resolve(0);
    }

    async findMany(where: Where<IUserDomain>): Promise<IUserDomain[]> {
        return Promise.resolve([]);
    }

    async findOne(where: Where<IUserDomain>): Promise<Domain<IUserDomain>> {
        const user: IUserDomain = await this.databaseService.findOne<IUserDomain>(DatabaseModels.USER, where);
        return user;
    }

    async update(where: Where<IUserDomain>, updateDto: UpdateUserDto): Promise<Domain<IUserDomain>> {
        return Promise.resolve(undefined);
    }

}