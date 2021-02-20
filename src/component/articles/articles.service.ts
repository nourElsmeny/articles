import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, createQueryBuilder } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { HelperService } from '../../config/helper/helper.service';
import { Articles } from '../../config/schemas/articles/articles.entity';
import { ArticlesRepositry } from '../../config/schemas/articles/articles.repositry';
import { DevicesRepositry } from '../../config/schemas/devices/devices.repositry';
import { UserRepositry } from '../../config/schemas/user/user.repositry';
import { CommentDto, CreateDto, FindDto, LikeDto } from './dto/articles.dto';
import { Comments } from '../../config/schemas/comments/comments.entity';
import { CommentsRepositry } from '../../config/schemas/comments/comments.repositry';
@Injectable()
export class ArticlesService {
    constructor(private helperService: HelperService,
        @InjectRepository(DevicesRepositry)
        private deviceRepositry: DevicesRepositry,

        @InjectRepository(UserRepositry)
        private userRepositry: UserRepositry,

        @InjectRepository(ArticlesRepositry)
        private articlesRepositry: ArticlesRepositry,

        @InjectRepository(CommentsRepositry)
        private commentsRepositry: CommentsRepositry,
    ) { }


    async createArt(req, createDto: CreateDto): Promise<any> {
        const articleData = new Articles();
        articleData.articleId = uuidv4();
        articleData.autherId = req.me.userId;
        articleData.isActive = true;
        articleData.isDeleted = false;
        articleData.title = createDto.title;
        articleData.body = createDto.body;

        const Article = await this.articlesRepositry.save(articleData);

        if (!Article) {
            throw new HttpException(
                'Cannot create article on this time, Please try again later',
                HttpStatus.BAD_REQUEST,
            );
        }

        return new HttpException("Success", HttpStatus.OK);
    }

    async getAll(findDto: FindDto): Promise<any> {
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
            article = await getConnection().query(qery);
        } catch (error) {
            throw new HttpException(
                'Something went wrong',
                HttpStatus.BAD_REQUEST,
            );
        }
        if (!article) {
            throw new HttpException(
                'Cannot get article on this time, Please try again later',
                HttpStatus.BAD_REQUEST,
            );
        }

        //---------------------- count -------------------------
        
        let qeryCount = 'select Count(*) as total ' +
            'from articles ' +
            'where true '
        findDto.auther ? 'and autherId = ' + findDto.auther : '' +
            findDto.arcId ? 'and articleId = ' + findDto.arcId : '' +
                findDto.createdAt ? 'and createdAt =' + findDto.createdAt : '' +
                    findDto.title ? 'and title LIKE %' + findDto.title + '%' : '' +
                    'ORDER BY articles.createAt ASC';

        let articleCount ;
        try {
            articleCount = await getConnection().query(qeryCount);
        } catch (error) {
            throw new HttpException(
                'Something went wrong',
                HttpStatus.BAD_REQUEST,
            );
        }
        
        if (!articleCount[0]) {
            throw new HttpException(
                'Cannot create article on this time, Please try again later',
                HttpStatus.BAD_REQUEST,
            );
        }

        return new HttpException({ articles: article, count: articleCount[0].total, pageNum: findDto.pageNum }, HttpStatus.OK);
    }

    async like(req, likeDto: LikeDto): Promise<any> {
        const article = await this.articlesRepositry.findOne(likeDto.artId);
        const articleUpdated = await this.articlesRepositry.update(likeDto.artId, { likes: article.likes + 1 });

        if (articleUpdated.affected != 1)
            throw new HttpException(
                'Cannot apply your like,sorry for that Trye again',
                HttpStatus.BAD_REQUEST,
            );

        return new HttpException("Success", HttpStatus.OK);
    }
    async comment(req, commentDto: CommentDto): Promise<any> {
        console.log(commentDto.body);

        let commentData = new Comments();
        commentData.commentId = uuidv4();
        commentData.articleId = commentDto.artId;
        commentData.body = commentDto.body;
        commentData.isActive = true;
        commentData.isDeleted = false;
        commentData.userId = req.me.userId;

        const commentValue = await this.commentsRepositry.save(commentData);

        if (!commentValue)
            throw new HttpException(
                'Cannot apply your comment,sorry for that Trye again',
                HttpStatus.BAD_REQUEST,
            );

        return new HttpException("Success", HttpStatus.OK);
    }
}
