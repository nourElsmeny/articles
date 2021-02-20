import { Test, TestingModule } from '@nestjs/testing';
import { DevicesRepositry } from '../../config/schemas/devices/devices.repositry';
import { HelperService } from '../../config/helper/helper.service';
import { ArticlesRepositry } from '../../config/schemas/articles/articles.repositry';
import { UserRepositry } from '../../config/schemas/user/user.repositry';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { CommentsRepositry } from '../../config/schemas/comments/comments.repositry';
import { INestApplication } from '@nestjs/common';
const request = require("supertest");

describe('ArticlesService', () => {
  let service: ArticlesService;
  let app: INestApplication;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers:[ArticlesController],
      providers: [ArticlesService,ArticlesRepositry,UserRepositry,DevicesRepositry,HelperService,CommentsRepositry],
    }).compile();

    service = await module.get<ArticlesService>(ArticlesService);

    app = await module.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
  //   request(app.getHttpServer())
  //           .post('/merchant/order/detail')
  //           .expect(200)
  //           .send(_requestData)
  //           .expect(function (res) {
  //               var _response = res.body.data;
  //               _it.response = res.body;
  //               expect(res.body.statusCode).toBe(sails.config.response.success);
  //               expect(_response.status).toBe("1");
  //               expect(_response.transactionId).toBe(transactionData.transactionId);
  //               expect(_response.amount).toBe(transactionData.amount);
  //               expect(_response.fromId).toBe(transactionData.fromId);
  //               expect(_response.toId).toBe(transactionData.toId);
  //               expect(_response.merchantUserId).toBe(merchantData.userId);
  //               expect(_response.userPercent).toBe(merchantData.userPercent);
  //               expect(_response.merchantPercent).toBe(merchantData.merchantPercent);
  //               expect(_response.destinationId).toBe(merchantData.defaultMID.id);
  //               expect(_response.destinationType).toBe("MID");
  //               expect(_response.serviceType).toBe("store");
  //               expect(_response.transactionDetails).toBeDefined();
  //               expect(_response.transactionDetails.operationId).toBe(testData.operationId);
  //               orderDetails = _response;
  //           })
  //           .end(function (err, res) {
  //               if (err)
  //                   return done(err);
  //               done();
  //           });
  //   expect(service).toBeDefined();
  });
});
