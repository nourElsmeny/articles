import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './component/user-mangement/user.controller';
import { UserService } from './component/user-mangement/user.service';
import { UserModule } from './component/user-mangement/user.module';
import { ArticlesController } from './component/articles/articles.controller';
import { ArticlesService } from './component/articles/articles.service';
import { ArticlesModule } from './component/articles/articles.module';
import { HelperService } from './config/helper/helper.service';
import { AuthAutherMiddleware, AuthUserMiddleware } from './config/auth/auth-user.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/database-config/typeOrm.config';
import { UserRepositry } from './config/schemas/user/user.repositry';
import { DevicesRepositry } from './config/schemas/devices/devices.repositry';
import { ArticlesRepositry } from './config/schemas/articles/articles.repositry';
import { CommentsRepositry } from './config/schemas/comments/comments.repositry';
import { ReplyRepositry } from './config/schemas/reply/reply.repositry';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([DevicesRepositry,UserRepositry,ArticlesRepositry,CommentsRepositry,ReplyRepositry]),
    UserModule, ArticlesModule],
  controllers: [AppController,UserController, ArticlesController],
  providers: [AppService, UserService,HelperService, ArticlesService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthUserMiddleware)
      .forRoutes("user/logout", "articles/like","articles/comment");

      consumer
      .apply(AuthUserMiddleware,AuthAutherMiddleware)
      .forRoutes("articles/create")
  }
}
