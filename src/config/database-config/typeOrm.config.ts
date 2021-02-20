import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// 'mongodb+srv://madfooatuser:Madfooat128@madfooat-cluster.mxuyc.mongodb.net/admin'
const __entityPath = __dirname+'/../schemas/';
// export const typeOrmConfig: TypeOrmModuleOptions = {
//   type: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   username: 'root',
//   password: 'root',
//   database: 'articles',
//   entities: [
//     __entityPath + 'user/user.entity.js',
//     __entityPath + 'devices/devices.entity.js',
//     __entityPath + 'articles/articles.entity.js',
//     __entityPath + 'comments/comments.entity.js',
//     __entityPath + 'reply/reply.entity.js',
//   ],
//   synchronize: true,
// };
export const typeOrmConfig: TypeOrmModuleOptions = {
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