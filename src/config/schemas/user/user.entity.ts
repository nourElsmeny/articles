import { ObjectId } from 'mongoose';
import {
  Entity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Users extends BaseEntity {  
  @PrimaryColumn()
  userId: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true})
  firstName: string;

  @Column({ nullable: true})
  lastName: string;

  @Column({ nullable: true})
  image: string;

  @Column()
  country: string;

  @Column()
  mobileNumber: string;

  @Column()
  countryCode: string;

  @Column({ nullable: true})
  address: string;

  @Column({ nullable: true})
  location: string;

  @Column()
  role: string;

  @Column({ nullable: true})
  gender: string;

  @Column({ nullable: true})
  pirthDate: string;

  @Column({ nullable: true})
  email: string;

  @Column({ nullable: true})
  emailVirefy: boolean;

  @Column({type:'boolean', default: () => false})
  mobileViryfy: boolean;

  @Column({type:'boolean', default: () => false})
  isActive: boolean;

  @Column({type:'boolean', default: () => false})
  isDeleted: boolean;

  @Column()
  isLogin: boolean;

  @Column({type:'boolean', default: () => false})
  isBlocked: boolean;

  @Column()
  userToken: string;

  @Column({ nullable: true})
  oldPassword: string;
  
  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
