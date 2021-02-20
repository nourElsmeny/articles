import { EntityRepository, Repository } from 'typeorm';
import { Articles } from './articles.entity';

@EntityRepository(Articles)
export class ArticlesRepositry extends Repository<Articles> {}
