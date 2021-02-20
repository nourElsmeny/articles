import { ObjectId } from 'mongoose';
import {
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  Entity,
  ObjectIdColumn,
} from 'typeorm';
import { Articles } from '../articles/articles.entity';
import { Users } from '../user/user.entity';

@Entity()
export class Comments extends BaseEntity {
  @PrimaryColumn()
  commentId: string;

  @Column()
  articleId: string;

  @Column()
  userId: string;

  @Column("text")
  body: string;

  @Column({type:'int', default: () => 0})
  likes: number;

  @Column()
  isActive: boolean;

  @Column()
  isDeleted: boolean;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

}
