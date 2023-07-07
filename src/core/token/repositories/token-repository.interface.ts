import {
    IRepositoryCreate,
    IRepositoryDelete,
    IRepositoryFindOne,
    IRepositoryUpdate
} from "../../database/database.interface";
import {CreateTokenDto} from "../dto/create-token.dto";
import {ITokenDomain} from "../models/token-domain.model";

export interface TokenRepository extends
    IRepositoryCreate<CreateTokenDto, ITokenDomain>,
    IRepositoryDelete<ITokenDomain>,
    IRepositoryUpdate<CreateTokenDto, ITokenDomain>,
    IRepositoryFindOne<ITokenDomain> {};