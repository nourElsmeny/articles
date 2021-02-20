"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const __entityPath = __dirname + '/../schemas/';
exports.typeOrmConfig = {
    type: 'mysql',
    host: 'hwr4wkxs079mtb19.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    username: 'b8hhress572gjlgd',
    password: 'l2ic0togfhmgarvy',
    database: 'f9mgfal6udhmdsoq',
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