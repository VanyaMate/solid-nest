import {ITokenDomain} from "./models/token-domain.model";

export interface ITokenService {

    create (userId: string): Promise<ITokenDomain | null>;
    refresh (userId: string): Promise<ITokenDomain | null>;
    get (userId: string): Promise<ITokenDomain | null>;
    delete (userId: string): Promise<boolean>;

}