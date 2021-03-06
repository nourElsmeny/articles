import { HelperService } from '../../config/helper/helper.service';
import { DevicesRepositry } from '../../config/schemas/devices/devices.repositry';
import { UserRepositry } from '../../config/schemas/user/user.repositry';
import { LoginDto, LogoutDto, SignupDto, UserExistDto } from './dto/user.dto';
export declare class UserService {
    private helperService;
    private deviceRepositry;
    private userRepositry;
    constructor(helperService: HelperService, deviceRepositry: DevicesRepositry, userRepositry: UserRepositry);
    userExist(userExistDto: UserExistDto): Promise<any>;
    signup(signupdto: SignupDto): Promise<any>;
    login(logindto: LoginDto): Promise<any>;
    logout(req: any, logoutDto: LogoutDto): Promise<any>;
}
