import { BaseEntity } from 'typeorm';
export declare class Comments extends BaseEntity {
    commentId: string;
    articleId: string;
    userId: string;
    body: string;
    likes: number;
    isActive: boolean;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
}
