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
exports.Comments = void 0;
const typeorm_1 = require("typeorm");
let Comments = class Comments extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Comments.prototype, "commentId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Comments.prototype, "artId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Comments.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Comments.prototype, "body", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Comments.prototype, "likes", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Comments.prototype, "isActive", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Comments.prototype, "isDeleted", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", String)
], Comments.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", String)
], Comments.prototype, "updatedAt", void 0);
Comments = __decorate([
    typeorm_1.Entity()
], Comments);
exports.Comments = Comments;
//# sourceMappingURL=comments.entity.js.map