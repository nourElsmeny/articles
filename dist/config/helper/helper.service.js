"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperService = void 0;
const common_1 = require("@nestjs/common");
const { v4: uuid } = require('uuid');
const crypto = require('crypto');
const crypto_1 = require("crypto");
const util_1 = require("util");
const Key = "36d851f4-3e68-4919-b6f9-24d335b8761e";
const iv = '9e313bae8ffb4bcfaffb3f6a8a5592c1';
require('dotenv').config();
let HelperService = class HelperService {
    async generateHash(data) {
        const key = crypto.scryptSync(Key, 'salt', 16);
        const hash = crypto.createHash('sha256', key);
        hash.update(data);
        let hashedData = hash.digest('hex');
        return hashedData;
    }
    ;
    async CriptoData(data) {
        const key = (await util_1.promisify(crypto_1.scrypt)(data.fingerPrint + "" + data.userId + "" + Key, 'salt', 32));
        const cipher = crypto_1.createCipheriv('aes-256-ctr', key, Buffer.from(iv, 'hex'));
        let input = JSON.stringify(data);
        const encryptedText = Buffer.concat([
            cipher.update(input),
            cipher.final(),
        ]);
        return encryptedText.toString("base64");
    }
    ;
    async Decrept(data) {
        let token = Buffer.from(data.token, 'base64');
        const key = (await util_1.promisify(crypto_1.scrypt)(data.fingerPrint + "" + data.userId + "" + Key, 'salt', 32));
        const decipher = crypto_1.createDecipheriv('aes-256-ctr', key, Buffer.from(iv, 'hex'));
        const decrpyted = Buffer.concat([
            decipher.update(Buffer.from(token)),
            decipher.final()
        ]);
        try {
            return JSON.parse(decrpyted.toString('utf8'));
        }
        catch (error) {
            return false;
        }
    }
    async clearUser(data) {
        const keys = ["password", "userToken", "oldPassword", "createdAt", "updatedAt"];
        for (let i in keys) {
            delete data[keys[i]];
        }
        return data;
    }
};
HelperService = __decorate([
    common_1.Injectable()
], HelperService);
exports.HelperService = HelperService;
//# sourceMappingURL=helper.service.js.map