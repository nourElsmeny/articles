import { BaseEntity } from 'typeorm';
export declare class Users extends BaseEntity {
    userId: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    image: string;
    country: string;
    mobileNumber: string;
    countryCode: string;
    address: string;
    location: string;
    role: string;
    gender: string;
    pirthDate: string;
    email: string;
    emailVirefy: boolean;
    mobileViryfy: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isLogin: boolean;
    isBlocked: boolean;
    userToken: string;
    oldPassword: string;
    createdAt: string;
    updatedAt: string;
}
