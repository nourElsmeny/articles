import { LoginDto, LogoutDto, SignupDto, UserExistDto } from './dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    signup(signupdto: SignupDto): Promise<any>;
    userExist(signupdto: UserExistDto): Promise<any>;
    login(logindto: LoginDto): Promise<any>;
    logout(req: any, logoutdto: LogoutDto): Promise<any>;
}
