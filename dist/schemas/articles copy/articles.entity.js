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
exports.Articles = void 0;
const typeorm_1 = require("typeorm");
let Articles = class Articles extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Articles.prototype, "articleId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Articles.prototype, "autherId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Articles.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Articles.prototype, "body", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Articles.prototype, "likes", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Articles.prototype, "isActive", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Articles.prototype, "isDeleted", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Articles.prototype, "isBlocked", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", String)
], Articles.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", String)
], Articles.prototype, "updatedAt", void 0);
Articles = __decorate([
    typeorm_1.Entity()
], Articles);
exports.Articles = Articles;
//# sourceMappingURL=articles.entity.js.map