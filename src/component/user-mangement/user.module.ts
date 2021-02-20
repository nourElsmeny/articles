import { Module } from '@nestjs/common';
import { HelperService } from '../../config/helper/helper.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({})
export class UserModule {}
