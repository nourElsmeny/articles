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
exports.ArticlesController = void 0;
const common_1 = require("@nestjs/common");
const articles_service_1 = require("./articles.service");
const articles_dto_1 = require("./dto/articles.dto");
let ArticlesController = class ArticlesController {
    constructor(articlesService) {
        this.articlesService = articlesService;
    }
    async all(findDto) {
        return await this.articlesService.getAll(findDto);
    }
    async logout(req, createDto) {
        return await this.articlesService.createArt(req, createDto);
    }
    async like(req, likeDto) {
        return await this.articlesService.like(req, likeDto);
    }
    async comment(req, commentDto) {
        return await this.articlesService.comment(req, commentDto);
    }
};
__decorate([
    common_1.Post("/"),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [articles_dto_1.FindDto]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "all", null);
__decorate([
    common_1.Post("create"),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, articles_dto_1.CreateDto]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "logout", null);
__decorate([
    common_1.Post("like"),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, articles_dto_1.LikeDto]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "like", null);
__decorate([
    common_1.Post("comment"),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, articles_dto_1.CommentDto]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "comment", null);
ArticlesController = __decorate([
    common_1.Controller('articles'),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService])
], ArticlesController);
exports.ArticlesController = ArticlesController;
//# sourceMappingURL=articles.controller.js.map