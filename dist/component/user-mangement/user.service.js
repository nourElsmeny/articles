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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const uuid_1 = require("uuid");
const helper_service_1 = require("../../config/helper/helper.service");
const devices_entity_1 = require("../../config/schemas/devices/devices.entity");
const devices_repositry_1 = require("../../config/schemas/devices/devices.repositry");
const user_repositry_1 = require("../../config/schemas/user/user.repositry");
const user_entity_1 = require("../../config/schemas/user/user.entity");
let UserService = class UserService {
    constructor(helperService, deviceRepositry, userRepositry) {
        this.helperService = helperService;
        this.deviceRepositry = deviceRepositry;
        this.userRepositry = userRepositry;
    }
    async userExist(userExistDto) {
        const user = await this.userRepositry.findOne({
            countryCode: userExistDto.countryCode,
            mobileNumber: userExistDto.mobileNum,
        });
        return new common_1.HttpException({ exist: !!user }, common_1.HttpStatus.OK);
    }
    async signup(signupdto) {
        let Password = await this.helperService.generateHash(signupdto.password);
        const user = await this.userRepositry.findOne({
            mobileNumber: signupdto.mobileNum,
        });
        if (user) {
            throw new common_1.HttpException('this mobile number alredy have an account', common_1.HttpStatus.BAD_REQUEST);
        }
        const userId = uuid_1.v4();
        const deviceToken = uuid_1.v4();
        let fingerprint = await this.helperService.generateHash(signupdto.fingerPrint);
        const userToken = await this.helperService.CriptoData({
            userId: userId,
            date: new Date(),
            fingerPrint: fingerprint,
        });
        const userData = new user_entity_1.Users();
        userData.username = signupdto.username;
        userData.password = Password;
        userData.userId = userId;
        userData.firstName = "";
        userData.lastName = "";
        userData.image = "";
        userData.country = signupdto.country;
        userData.mobileNumber = signupdto.mobileNum;
        userData.countryCode = signupdto.countryCode;
        userData.address = "";
        userData.location = "";
        userData.role = signupdto.role;
        userData.gender = "";
        userData.pirthDate = "";
        userData.email = "";
        userData.emailVirefy = false;
        userData.mobileViryfy = false;
        userData.isActive = false;
        userData.isDeleted = false;
        userData.isLogin = true;
        userData.isBlocked = false;
        userData.userToken = userToken;
        userData.oldPassword = '{}';
        const deviceData = new devices_entity_1.Devices();
        deviceData.deviceId = fingerprint;
        deviceData.userId = userId;
        deviceData.detail = signupdto.uHeader;
        deviceData.isActive = true;
        deviceData.isDeleted = false;
        deviceData.isBlocked = false;
        const userRes = await this.userRepositry.save(userData);
        if (!userRes) {
            throw new common_1.HttpException('Error in create user', common_1.HttpStatus.BAD_REQUEST);
        }
        const deviceRes = await this.deviceRepositry.save(deviceData);
        if (!deviceRes) {
            throw new common_1.HttpException('Cannot recognized this Device', common_1.HttpStatus.BAD_REQUEST);
        }
        return new common_1.HttpException({ token: userRes.userToken }, common_1.HttpStatus.OK);
    }
    async login(logindto) {
        let Password = await this.helperService.generateHash(logindto.password);
        const user = await this.userRepositry.findOne({
            mobileNumber: logindto.mobileNum,
            countryCode: logindto.countryCode
        });
        if (!user) {
            throw new common_1.HttpException('this mobile number not foud, please signup first', common_1.HttpStatus.BAD_REQUEST);
        }
        const fingerPrint = await this.helperService.generateHash(logindto.fingerPrint);
        const deviceRes = await this.deviceRepositry.findOne({ userId: user.userId, deviceId: fingerPrint });
        let activeDevice = false;
        if (deviceRes) {
            activeDevice = deviceRes.isActive;
        }
        if (user.isLogin && user.password == Password && activeDevice) {
            throw new common_1.HttpException({
                message: 'You are already loged in', token: user.userToken
            }, common_1.HttpStatus.OK);
        }
        const userToken = await this.helperService.CriptoData({
            userId: user.userId,
            date: new Date(),
            fingerPrint: fingerPrint,
        });
        const deviceData = new devices_entity_1.Devices();
        deviceData.deviceId = fingerPrint;
        deviceData.userId = user.userId;
        deviceData.detail = logindto.uHeader;
        deviceData.isActive = true;
        deviceData.isDeleted = false;
        deviceData.isBlocked = false;
        user.userToken = userToken;
        const userUpdates = await this.userRepositry.save(user);
        if (!userUpdates) {
            throw new common_1.HttpException('Somthing went wrrong, Please try again', common_1.HttpStatus.BAD_REQUEST);
        }
        let deviceUpdates;
        if (deviceRes && !activeDevice) {
            deviceUpdates = await this.deviceRepositry.update({ deviceId: deviceRes.deviceId }, { isActive: true });
        }
        else {
            deviceUpdates = await this.deviceRepositry.save(deviceData);
        }
        return new common_1.HttpException({ token: userUpdates.userToken }, common_1.HttpStatus.OK);
    }
    async logout(req, logoutDto) {
        const userToken = await this.helperService.CriptoData({
            userId: req.me.userId,
            date: new Date(),
            fingerPrint: req.me.fingerprint,
        });
        const userRes = await this.userRepositry.update({
            userId: req.me.userId
        }, {
            isLogin: false,
            userToken: userToken
        });
        return new common_1.HttpException("Success", common_1.HttpStatus.OK);
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(1, typeorm_1.InjectRepository(devices_repositry_1.DevicesRepositry)),
    __param(2, typeorm_1.InjectRepository(user_repositry_1.UserRepositry)),
    __metadata("design:paramtypes", [helper_service_1.HelperService,
        devices_repositry_1.DevicesRepositry,
        user_repositry_1.UserRepositry])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map