import {Injectable} from "@nestjs/common";
import {ITokenService} from "../../core/token/token.interface";
import {TokenService as TokenCore} from "../../core/token/token.service";
import {TokenMockRepository} from "../../core/token/repositories/token-mock.repository";
import {ITokenDomain} from "../../core/token/models/token-domain.model";
import {Domain} from "../../core/database/database.interface";

@Injectable()
export class TokenService implements ITokenService {

    private readonly tokenCore: ITokenService;

    constructor() {
        this.tokenCore = new TokenCore(new TokenMockRepository());
    }

    public create (userId: string): Promise<Domain<ITokenDomain>> {
        return this.tokenCore.create(userId);
    }

    delete(userId: string): Promise<number> {
        return this.tokenCore.delete(userId);
    }

    get(userId: string): Promise<ITokenDomain | null> {
        return this.tokenCore.get(userId);
    }

    refresh(userId: string): Promise<ITokenDomain | null> {
        return this.tokenCore.refresh(userId);
    }

}