import { Body, Controller, Get, Post, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CommentDto, CreateDto, FindDto, LikeDto } from './dto/articles.dto';

@Controller('articles')
export class ArticlesController {
    constructor(private articlesService:ArticlesService){
    }
    @Post("/")
    @UsePipes(ValidationPipe)
    async all(@Body() findDto: FindDto):Promise<any>{
        return await this.articlesService.getAll(findDto)
      }

    @Post("create")
    @UsePipes(ValidationPipe)
    async logout(@Req() req, @Body() createDto: CreateDto):Promise<any>{
        return await this.articlesService.createArt(req, createDto)
      }
      @Post("like")
      @UsePipes(ValidationPipe)
      async like(@Req() req, @Body() likeDto: LikeDto):Promise<any>{
          return await this.articlesService.like(req, likeDto)
        }
      @Post("comment")
      @UsePipes(ValidationPipe)
      async comment(@Req() req, @Body() commentDto: CommentDto):Promise<any>{
          return await this.articlesService.comment(req, commentDto)
        }
    
}
