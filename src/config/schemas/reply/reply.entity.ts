
import {
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  PrimaryColumn,
  Entity,
} from 'typeorm';

@Entity()
export class Reply extends BaseEntity {
  @PrimaryColumn()
  replyId: string;

  @Column()
  commentId: string;

  @Column()
  artId: string;

  @Column()
  userId: string;

  @Column()
  body: string;

  @Column()
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
