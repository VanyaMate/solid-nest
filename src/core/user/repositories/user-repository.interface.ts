import {
    IRepositoryCreate,
    IRepositoryDelete, IRepositoryFindMany,
    IRepositoryFindOne,
    IRepositoryUpdate
} from "../../database/database.interface";
import {CreateUserDto} from "../dto/create-user.dto";
import {IUserDomain} from "../models/user-domain.model";
import {UpdateUserDto} from "../dto/update-user.dto";

export interface IUserRepository extends
    IRepositoryCreate<CreateUserDto, IUserDomain>,
    IRepositoryUpdate<UpdateUserDto, IUserDomain>,
    IRepositoryDelete<IUserDomain>,
    IRepositoryFindOne<IUserDomain>,
    IRepositoryFindMany<IUserDomain> {};