import {CreateUserDto} from "./dto/create-user.dto";
import {IUserDomain} from "./models/user-domain.model";
import {
    Domain,
    IRepositoryCreate,
    IRepositoryDelete, IRepositoryFindMany,
    IRepositoryFindOne,
    IRepositoryUpdate,
    Where
} from "../database/database.interface";
import {UpdateUserDto} from "./dto/update-user.dto";

export interface IUserService {

    create (createDto: CreateUserDto): Promise<Domain<IUserDomain>>;
    update (where: Where<IUserDomain>, updateDto: UpdateUserDto): Promise<Domain<IUserDomain>>;
    delete (where: Where<IUserDomain>): Promise<number>;

    findOne (where: Where<IUserDomain>): Promise<Domain<IUserDomain>>;
    findMany (where: Where<IUserDomain>): Promise<IUserDomain[]>;

}

export interface IUserRepository extends
    IRepositoryCreate<IUserDomain, CreateUserDto>,
    IRepositoryUpdate<IUserDomain, UpdateUserDto>,
    IRepositoryDelete<IUserDomain>,
    IRepositoryFindOne<IUserDomain>,
    IRepositoryFindMany<IUserDomain> {};