import { BaseEntity } from 'typeorm';
export declare class Devices extends BaseEntity {
    deviceId: string;
    userId: string;
    detail: string;
    isActive: boolean;
    isDeleted: boolean;
    isBlocked: boolean;
    createdAt: string;
    updatedAt: string;
}
