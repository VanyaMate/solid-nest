import {CreateUserDto} from "./dto/create-user.dto";
import {IUserDomain} from "./models/user-domain.model";
import {Where} from "../database/database.interface";
import {UpdateUserDto} from "./dto/update-user.dto";

export interface IUserService {

    create (createDto: CreateUserDto): Promise<IUserDomain | null>;
    update (where: Where<IUserDomain>, updateDto: UpdateUserDto): Promise<IUserDomain | null>;
    delete (where: Where<IUserDomain>): Promise<boolean>;

    findOne (where: Where<IUserDomain>): Promise<IUserDomain | null>;
    findMany (where: Where<IUserDomain>): Promise<IUserDomain[]>;

}