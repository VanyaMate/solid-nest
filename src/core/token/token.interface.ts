import {ITokenDomain} from "./models/token-domain.model";
import {
    Domain,
    IRepositoryCreate,
    IRepositoryDelete,
    IRepositoryFindOne,
    IRepositoryUpdate
} from "../database/database.interface";
import {CreateTokenDto} from "./dto/create-token.dto";
import {UpdateTokenDto} from "./dto/update-token.dto";

export interface ITokenService {

    create (userId: string): Promise<Domain<ITokenDomain>>;
    refresh (userId: string): Promise<Domain<ITokenDomain>>;
    get (userId: string): Promise<Domain<ITokenDomain>>;
    delete (userId: string): Promise<number>;

}

export interface ITokenRepository extends
    IRepositoryCreate<ITokenDomain, CreateTokenDto>,
    IRepositoryDelete<ITokenDomain>,
    IRepositoryUpdate<ITokenDomain, UpdateTokenDto>,
    IRepositoryFindOne<ITokenDomain> {};