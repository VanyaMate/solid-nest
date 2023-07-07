import {Body, Controller, Get, Post} from "@nestjs/common";
import {UserService} from "./user.service";
import {CreateUserDto} from "../../../core/user/dto/create-user.dto";

@Controller('/api/v1/user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get()
    findOne () {
        return this.userService.findOne({ login: 'vanya' });
    }

    @Post()
    create (@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

}