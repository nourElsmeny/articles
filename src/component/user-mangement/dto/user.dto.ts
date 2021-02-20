import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class SignupDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    mobileNum: string;

    @IsNotEmpty()
    @IsString()
    country: string;


    @IsNotEmpty()
    @IsString()
    countryCode: string;

    @IsNotEmpty()
    @IsString()
    role: string;

    @IsNotEmpty()
    @IsString()
    fingerPrint: string;


    @IsNotEmpty()
    @IsString()
    uHeader: string;

}



export class UserExistDto {
    @IsNotEmpty()
    @IsString()
    mobileNum: string;


    @IsNotEmpty()
    @IsString()
    countryCode: string;

    @IsNotEmpty()
    @IsString()
    fingerPrint: string;

    @IsNotEmpty()
    @IsString()
    uHeader: string;
}


export class LoginDto{
    @IsNotEmpty()
    @IsString()
    mobileNum: string;


    @IsNotEmpty()
    @IsString()
    countryCode: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    fingerPrint: string;

    @IsNotEmpty()
    @IsString()
    uHeader: string;
}


export class LogoutDto{
    @IsNotEmpty()
    @IsString()
    token: string;

    @IsNotEmpty()
    @IsString()
    fingerPrint: string;

    @IsNotEmpty()
    @IsString()
    uHeader: string;
}