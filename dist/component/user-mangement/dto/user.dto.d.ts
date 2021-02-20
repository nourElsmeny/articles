export declare class SignupDto {
    username: string;
    password: string;
    mobileNum: string;
    country: string;
    countryCode: string;
    role: string;
    fingerPrint: string;
    uHeader: string;
}
export declare class UserExistDto {
    mobileNum: string;
    countryCode: string;
    fingerPrint: string;
    uHeader: string;
}
export declare class LoginDto {
    mobileNum: string;
    countryCode: string;
    password: string;
    fingerPrint: string;
    uHeader: string;
}
export declare class LogoutDto {
    token: string;
    fingerPrint: string;
    uHeader: string;
}
