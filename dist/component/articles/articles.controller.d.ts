import { ArticlesService } from './articles.service';
import { CommentDto, CreateDto, FindDto, LikeDto } from './dto/articles.dto';
export declare class ArticlesController {
    private articlesService;
    constructor(articlesService: ArticlesService);
    all(findDto: FindDto): Promise<any>;
    logout(req: any, createDto: CreateDto): Promise<any>;
    like(req: any, likeDto: LikeDto): Promise<any>;
    comment(req: any, commentDto: CommentDto): Promise<any>;
}
