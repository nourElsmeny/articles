import { BaseEntity } from 'typeorm';
export declare class Comments extends BaseEntity {
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
