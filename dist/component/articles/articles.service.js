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
exports.ArticlesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const uuid_1 = require("uuid");
const helper_service_1 = require("../../config/helper/helper.service");
const articles_entity_1 = require("../../config/schemas/articles/articles.entity");
const articles_repositry_1 = require("../../config/schemas/articles/articles.repositry");
const devices_repositry_1 = require("../../config/schemas/devices/devices.repositry");
const user_repositry_1 = require("../../config/schemas/user/user.repositry");
const comments_entity_1 = require("../../config/schemas/comments/comments.entity");
const comments_repositry_1 = require("../../config/schemas/comments/comments.repositry");
let ArticlesService = class ArticlesService {
    constructor(helperService, deviceRepositry, userRepositry, articlesRepositry, commentsRepositry) {
        this.helperService = helperService;
        this.deviceRepositry = deviceRepositry;
        this.userRepositry = userRepositry;
        this.articlesRepositry = articlesRepositry;
        this.commentsRepositry = commentsRepositry;
    }
    async createArt(req, createDto) {
        const articleData = new articles_entity_1.Articles();
        articleData.articleId = uuid_1.v4();
        articleData.autherId = req.me.userId;
        articleData.isActive = true;
        articleData.isDeleted = false;
        articleData.title = createDto.title;
        articleData.body = createDto.body;
        const Article = await this.articlesRepositry.save(articleData);
        if (!Article) {
            throw new common_1.HttpException('Cannot create article on this time, Please try again later', common_1.HttpStatus.BAD_REQUEST);
        }
        return new common_1.HttpException("Success", common_1.HttpStatus.OK);
    }
    async getAll(findDto) {
        let qery = 'select * ' +
            'from articles ' +
            'left join (SELECT ' +
            'comments.articleId, ' +
            'COUNT(*) as commentsCount ' +
            'FROM ' +
            'comments ' +
            'GROUP BY comments.articleId) ' +
            'as commentCount on commentCount.articleId = articles.articleId ' +
            'where true ';
        qery += findDto.auther ? 'and autherId = ' + findDto.auther : '';
        qery += findDto.arcId ? 'and articleId = ' + findDto.arcId : '';
        qery += findDto.createdAt ? 'and createdAt =' + findDto.createdAt : '';
        qery += findDto.title ? 'and title LIKE %' + findDto.title + '%' : '';
        qery += 'ORDER BY articles.createdAt ASC LIMIT 10 OFFSET ' + ((findDto.pageNum * 10) - 10);
        let article;
        try {
            article = await typeorm_2.getConnection().query(qery);
        }
        catch (error) {
            throw new common_1.HttpException('Something went wrong', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!article) {
            throw new common_1.HttpException('Cannot get article on this time, Please try again later', common_1.HttpStatus.BAD_REQUEST);
        }
        let qeryCount = 'select Count(*) as total ' +
            'from articles ' +
            'where true ';
        findDto.auther ? 'and autherId = ' + findDto.auther : '' +
            findDto.arcId ? 'and articleId = ' + findDto.arcId : '' +
            findDto.createdAt ? 'and createdAt =' + findDto.createdAt : '' +
            findDto.title ? 'and title LIKE %' + findDto.title + '%' : '' +
            'ORDER BY articles.createAt ASC';
        let articleCount;
        try {
            articleCount = await typeorm_2.getConnection().query(qeryCount);
        }
        catch (error) {
            throw new common_1.HttpException('Something went wrong', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!articleCount[0]) {
            throw new common_1.HttpException('Cannot create article on this time, Please try again later', common_1.HttpStatus.BAD_REQUEST);
        }
        return new common_1.HttpException({ articles: article, count: articleCount[0].total, pageNum: findDto.pageNum }, common_1.HttpStatus.OK);
    }
    async like(req, likeDto) {
        const article = await this.articlesRepositry.findOne(likeDto.artId);
        const articleUpdated = await this.articlesRepositry.update(likeDto.artId, { likes: article.likes + 1 });
        if (articleUpdated.affected != 1)
            throw new common_1.HttpException('Cannot apply your like,sorry for that Trye again', common_1.HttpStatus.BAD_REQUEST);
        return new common_1.HttpException("Success", common_1.HttpStatus.OK);
    }
    async comment(req, commentDto) {
        console.log(commentDto.body);
        let commentData = new comments_entity_1.Comments();
        commentData.commentId = uuid_1.v4();
        commentData.articleId = commentDto.artId;
        commentData.body = commentDto.body;
        commentData.isActive = true;
        commentData.isDeleted = false;
        commentData.userId = req.me.userId;
        const commentValue = await this.commentsRepositry.save(commentData);
        if (!commentValue)
            throw new common_1.HttpException('Cannot apply your comment,sorry for that Trye again', common_1.HttpStatus.BAD_REQUEST);
        return new common_1.HttpException("Success", common_1.HttpStatus.OK);
    }
};
ArticlesService = __decorate([
    common_1.Injectable(),
    __param(1, typeorm_1.InjectRepository(devices_repositry_1.DevicesRepositry)),
    __param(2, typeorm_1.InjectRepository(user_repositry_1.UserRepositry)),
    __param(3, typeorm_1.InjectRepository(articles_repositry_1.ArticlesRepositry)),
    __param(4, typeorm_1.InjectRepository(comments_repositry_1.CommentsRepositry)),
    __metadata("design:paramtypes", [helper_service_1.HelperService,
        devices_repositry_1.DevicesRepositry,
        user_repositry_1.UserRepositry,
        articles_repositry_1.ArticlesRepositry,
        comments_repositry_1.CommentsRepositry])
], ArticlesService);
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map