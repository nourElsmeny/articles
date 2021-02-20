import { Module } from '@nestjs/common';
import { HelperService } from '../../config/helper/helper.service';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';

@Module({
})
export class ArticlesModule {}
