import {CreateTokenDto} from "../dto/create-token.dto";
import {ITokenDomain} from "../models/token-domain.model";
import {Where} from "../../database/database.interface";
import {ITokenRepository} from "../token.interface";
import {UpdateTokenDto} from "../dto/update-token.dto";

export class TokenMockRepository implements ITokenRepository {

    create(createDto: CreateTokenDto): Promise<ITokenDomain> {
        return Promise.resolve(undefined);
    }

    delete(where: Where<ITokenDomain>): Promise<number> {
        return Promise.resolve(0);
    }

    findOne(where: Where<ITokenDomain>): Promise<ITokenDomain> {
        return Promise.resolve(undefined);
    }

    update(where: Where<ITokenDomain>, updateDto: UpdateTokenDto): Promise<ITokenDomain> {
        return Promise.resolve(undefined);
    }

}