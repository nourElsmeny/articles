import { EntityRepository, Repository } from 'typeorm';
import { Reply } from './reply.entity';

@EntityRepository(Reply)
export class ReplyRepositry extends Repository<Reply> {}
