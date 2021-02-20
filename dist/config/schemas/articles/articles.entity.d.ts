import { BaseEntity } from 'typeorm';
export declare class Articles extends BaseEntity {
    articleId: string;
    autherId: string;
    title: string;
    body: string;
    likes: number;
    isActive: boolean;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
}
