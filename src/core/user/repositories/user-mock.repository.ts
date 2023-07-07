import {Domain, Where} from "../../database/database.interface";
import {CreateUserDto} from "../dto/create-user.dto";
import {UpdateUserDto} from "../dto/update-user.dto";
import {IUserDomain} from "../models/user-domain.model";
import {IUserRepository} from "../user.interface";

export class UserMockRepository implements IUserRepository {

    create(createDto: CreateUserDto): Promise<Domain<IUserDomain>> {
        return Promise.resolve(undefined);
    }

    delete(where: Where<IUserDomain>): Promise<number> {
        return Promise.resolve(0);
    }

    findMany(where: Where<IUserDomain>): Promise<IUserDomain[]> {
        return Promise.resolve([]);
    }

    async findOne(where: Where<IUserDomain>): Promise<Domain<IUserDomain>> {
        return {
            id: '1',
            login: 'vanya',
            password: '123123123',
            createdAt: 123123123,
        }
    }

    update(where: Where<IUserDomain>, updateDto: UpdateUserDto): Promise<Domain<IUserDomain>> {
        return Promise.resolve(undefined);
    }

}
