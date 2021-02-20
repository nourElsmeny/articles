import { NestMiddleware } from '@nestjs/common';
import { HelperService } from 'src/helper/helper.service';
import { DevicesRepositry } from '../schemas/devices/devices.repositry';
import { UserRepositry } from 'src/schemas/user/user.repositry';
export declare class AuthUserMiddleware implements NestMiddleware {
    private helperService;
    private deviceRepositry;
    private userRepositry;
    constructor(helperService: HelperService, deviceRepositry: DevicesRepositry, userRepositry: UserRepositry);
    use(req: any, res: any, next: () => void): Promise<void>;
}
