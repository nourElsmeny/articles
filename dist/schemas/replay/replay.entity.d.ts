import { BaseEntity } from 'typeorm';
export declare class Reply extends BaseEntity {
    replyId: string;
    commentId: string;
    artId: string;
    userId: string;
    body: string;
    likes: number;
    isActive: boolean;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
}
