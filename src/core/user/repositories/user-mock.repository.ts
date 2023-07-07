import {Where} from "../../database/database.interface";
import {CreateUserDto} from "../dto/create-user.dto";
import {UpdateUserDto} from "../dto/update-user.dto";
import {IUserDomain} from "../models/user-domain.model";
import {IUserRepository} from "./user-repository.interface";

export class UserMockRepository implements IUserRepository {
    create(createDto: CreateUserDto): Promise<IUserDomain> {
        return Promise.resolve(undefined);
    }

    delete(where: Where<IUserDomain>): number {
        return 0;
    }

    findMany(where: Where<IUserDomain>): Promise<IUserDomain[]> {
        return Promise.resolve([]);
    }

    findOne(where: Where<IUserDomain>): Promise<IUserDomain> {
        return Promise.resolve(undefined);
    }

    update(where: Where<UpdateUserDto>, updateDto: IUserDomain): Promise<UpdateUserDto> {
        return Promise.resolve(undefined);
    }

}
