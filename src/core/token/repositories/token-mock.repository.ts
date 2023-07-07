import {TokenRepository} from "./token-repository.interface";
import {CreateTokenDto} from "../dto/create-token.dto";
import {ITokenDomain} from "../models/token-domain.model";
import {Where} from "../../database/database.interface";

export class TokenMockRepository implements TokenRepository {

    create(createDto: CreateTokenDto): Promise<ITokenDomain> {
        return Promise.resolve(undefined);
    }

    delete(where: Where<ITokenDomain>): number {
        return 0;
    }

    findOne(where: Where<ITokenDomain>): Promise<ITokenDomain> {
        return Promise.resolve(undefined);
    }

    update(where: Where<CreateTokenDto>, updateDto: ITokenDomain): Promise<CreateTokenDto> {
        return Promise.resolve(undefined);
    }

}