"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_controller_1 = require("./component/user-mangement/user.controller");
const user_service_1 = require("./component/user-mangement/user.service");
const user_module_1 = require("./component/user-mangement/user.module");
const articles_controller_1 = require("./component/articles/articles.controller");
const articles_service_1 = require("./component/articles/articles.service");
const articles_module_1 = require("./component/articles/articles.module");
const helper_service_1 = require("./config/helper/helper.service");
const auth_user_middleware_1 = require("./config/auth/auth-user.middleware");
const typeorm_1 = require("@nestjs/typeorm");
const typeOrm_config_1 = require("./config/database-config/typeOrm.config");
const user_repositry_1 = require("./config/schemas/user/user.repositry");
const devices_repositry_1 = require("./config/schemas/devices/devices.repositry");
const articles_repositry_1 = require("./config/schemas/articles/articles.repositry");
const comments_repositry_1 = require("./config/schemas/comments/comments.repositry");
const reply_repositry_1 = require("./config/schemas/reply/reply.repositry");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(auth_user_middleware_1.AuthUserMiddleware)
            .forRoutes("user/logout", "articles/like", "articles/comment");
        consumer
            .apply(auth_user_middleware_1.AuthUserMiddleware, auth_user_middleware_1.AuthAutherMiddleware)
            .forRoutes("articles/create");
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forRoot(typeOrm_config_1.typeOrmConfig),
            typeorm_1.TypeOrmModule.forFeature([devices_repositry_1.DevicesRepositry, user_repositry_1.UserRepositry, articles_repositry_1.ArticlesRepositry, comments_repositry_1.CommentsRepositry, reply_repositry_1.ReplyRepositry]),
            user_module_1.UserModule, articles_module_1.ArticlesModule],
        controllers: [app_controller_1.AppController, user_controller_1.UserController, articles_controller_1.ArticlesController],
        providers: [app_service_1.AppService, user_service_1.UserService, helper_service_1.HelperService, articles_service_1.ArticlesService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map