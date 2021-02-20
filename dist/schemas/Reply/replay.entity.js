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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reply = void 0;
const typeorm_1 = require("typeorm");
let Reply = class Reply extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Reply.prototype, "replyId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reply.prototype, "commentId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reply.prototype, "artId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reply.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reply.prototype, "body", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Reply.prototype, "likes", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Reply.prototype, "isActive", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Reply.prototype, "isDeleted", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", String)
], Reply.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", String)
], Reply.prototype, "updatedAt", void 0);
Reply = __decorate([
    typeorm_1.Entity()
], Reply);
exports.Reply = Reply;
//# sourceMappingURL=replay.entity.js.map