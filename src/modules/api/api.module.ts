import {Module} from "@nestjs/common";
import {UserModule} from "./user/user.module";

@Module({
    providers: [],
    controllers: [],
    imports: [UserModule],
})
export class ApiModule {}