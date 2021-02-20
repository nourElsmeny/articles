"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const __entityPath = __dirname + '/../schemas/';
exports.typeOrmConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'articles',
    entities: [
        __entityPath + 'user/user.entity.js',
        __entityPath + 'devices/devices.entity.js',
        __entityPath + 'articles/articles.entity.js',
        __entityPath + 'comments/comments.entity.js',
        __entityPath + 'reply/reply.entity.js',
    ],
    synchronize: true,
};
//# sourceMappingURL=typeOrm.config.js.map