"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserMiddleware = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const helper_service_1 = require("../helper/helper.service");
const devices_repositry_1 = require("../schemas/devices/devices.repositry");
const user_repositry_1 = require("../schemas/user/user.repositry");
let AuthUserMiddleware = class AuthUserMiddleware {
    constructor(helperService, deviceRepositry, userRepositry) {
        this.helperService = helperService;
        this.deviceRepositry = deviceRepositry;
        this.userRepositry = userRepositry;
    }
    async use(req, res, next) {
        const user = await this.userRepositry.findOne({
            userToken: req.body.token,
        });
        if (!user)
            throw new common_1.HttpException("You don't have authority to access this page.", common_1.HttpStatus.UNAUTHORIZED);
        const fingerprint = await this.helperService.generateHash(req.body.fingerPrint);
        const data = {
            fingerPrint: fingerprint,
            userId: user.userId,
            token: req.body.token
        };
        const tokenDecript = await this.helperService.Decrept(data);
        if (!tokenDecript)
            throw new common_1.HttpException("You don't have authority to access this page.", common_1.HttpStatus.UNAUTHORIZED);
        req.me = user;
        next();
    }
};
AuthUserMiddleware = __decorate([
    common_1.Injectable(),
    __param(1, typeorm_1.InjectRepository(devices_repositry_1.DevicesRepositry)),
    __param(2, typeorm_1.InjectRepository(user_repositry_1.UserRepositry)),
    __metadata("design:paramtypes", [helper_service_1.HelperService,
        devices_repositry_1.DevicesRepositry,
        user_repositry_1.UserRepositry])
], AuthUserMiddleware);
exports.AuthUserMiddleware = AuthUserMiddleware;
//# sourceMappingURL=auth-user.middleware.js.map