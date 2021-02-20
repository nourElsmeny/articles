import { NestMiddleware } from '@nestjs/common';
import { HelperService } from '../../config/helper/helper.service';
import { DevicesRepositry } from '../../config/schemas/devices/devices.repositry';
import { UserRepositry } from '../../config/schemas/user/user.repositry';
export declare class AuthUserMiddleware implements NestMiddleware {
    private helperService;
    private deviceRepositry;
    private userRepositry;
    constructor(helperService: HelperService, deviceRepositry: DevicesRepositry, userRepositry: UserRepositry);
    use(req: any, res: any, next: () => void): Promise<void>;
}
export declare class AuthAutherMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): Promise<void>;
}
