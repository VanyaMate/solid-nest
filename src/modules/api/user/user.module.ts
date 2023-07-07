import {Module} from "@nestjs/common";
import {TokenModule} from "../../token/token.module";
import {UserService} from "./user.service";
import {UserController} from "./user.controller";
import {UserDatabaseRepository} from "./repository/user.repository";
import {DatabaseModule} from "../../database/database.module";

@Module({
    providers: [UserService, UserDatabaseRepository],
    controllers: [UserController],
    imports: [TokenModule, DatabaseModule]
})
export class UserModule {}