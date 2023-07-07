import {ITokenRepository, ITokenService} from "./token.interface";
import {ITokenDomain} from "./models/token-domain.model";
import {Domain} from "../database/database.interface";

export class TokenService implements ITokenService {

    constructor(private readonly tokenRepository: ITokenRepository) {}

    async create(userId: string): Promise<Domain<ITokenDomain>> {
        return this.tokenRepository.create({ userId });
    }

    async delete(userId: string): Promise<number> {
        return this.tokenRepository.delete({ userId });
    }

    async get(userId: string): Promise<Domain<ITokenDomain>> {
        return this.tokenRepository.findOne({ userId })
    }

    async refresh(userId: string): Promise<Domain<ITokenDomain>> {
        return this.tokenRepository.update({ userId }, { token: 'str' });
    }

}