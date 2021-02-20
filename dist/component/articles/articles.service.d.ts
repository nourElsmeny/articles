import { HelperService } from '../../config/helper/helper.service';
import { ArticlesRepositry } from '../../config/schemas/articles/articles.repositry';
import { DevicesRepositry } from '../../config/schemas/devices/devices.repositry';
import { UserRepositry } from '../../config/schemas/user/user.repositry';
import { CommentDto, CreateDto, FindDto, LikeDto } from './dto/articles.dto';
import { CommentsRepositry } from '../../config/schemas/comments/comments.repositry';
export declare class ArticlesService {
    private helperService;
    private deviceRepositry;
    private userRepositry;
    private articlesRepositry;
    private commentsRepositry;
    constructor(helperService: HelperService, deviceRepositry: DevicesRepositry, userRepositry: UserRepositry, articlesRepositry: ArticlesRepositry, commentsRepositry: CommentsRepositry);
    createArt(req: any, createDto: CreateDto): Promise<any>;
    getAll(findDto: FindDto): Promise<any>;
    like(req: any, likeDto: LikeDto): Promise<any>;
    comment(req: any, commentDto: CommentDto): Promise<any>;
}
