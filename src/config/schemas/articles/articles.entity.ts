import { ObjectId } from 'mongoose';
import {
  BaseEntity,
  CreateDateColumn,
  JoinColumn,
  UpdateDateColumn,
  Column,
  PrimaryColumn,
  Entity,
  OneToMany,
  ObjectIdColumn,
} from 'typeorm';
import { Comments } from '../comments/comments.entity';
import { Users } from '../user/user.entity';

@Entity()
export class Articles extends BaseEntity {
  @PrimaryColumn()
  articleId: string;

  @Column()
  // @OneToMany(type => Users, users => users.userId)
  autherId: string;

  @Column()
  title: string;

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
