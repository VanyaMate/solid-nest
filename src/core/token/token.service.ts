import {ITokenService} from "./token.interface";
import {ITokenDomain} from "./models/token-domain.model";

export class TokenService implements ITokenService {
    async create(userId: string): Promise<ITokenDomain | null> {
        return undefined;
    }

    async delete(userId: string): Promise<boolean> {
        return false;
    }

    async get(userId: string): Promise<ITokenDomain | null> {
        return undefined;
    }

    async refresh(userId: string): Promise<ITokenDomain | null> {
        return undefined;
    }

}