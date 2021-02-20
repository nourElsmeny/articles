import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateDto {
    @IsNotEmpty()
    @IsString()
    token: string;

    @IsNotEmpty()
    @IsString()
    fingerPrint: string;

    @IsNotEmpty()
    @IsString()
    uHeader: string;
    
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    body: string;
}

export class FindDto {

    @IsOptional()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    arcId: string;

    @IsOptional()
    @IsString()
    auther: string;

    @IsOptional()
    @IsString()
    createdAt: string;

    @IsNotEmpty()
    @IsString()
    fingerPrint: string;

    @IsNotEmpty()
    @IsString()
    pageNum: number;

    @IsNotEmpty()
    @IsString()
    uHeader: string;
}


export class CommentDto{
    @IsNotEmpty()
    @IsString()
    token: string;
    
    @IsNotEmpty()
    @IsString()
    fingerPrint: string;

    @IsNotEmpty()
    @IsString()
    uHeader: string;
    
    @IsNotEmpty()
    @IsString()
    artId: string;

    @IsNotEmpty()
    @IsString()
    body: string;
}


export class LikeDto{
    @IsNotEmpty()
    @IsString()
    token: string;

    @IsNotEmpty()
    @IsString()
    fingerPrint: string;

    @IsNotEmpty()
    @IsString()
    uHeader: string;


    @IsNotEmpty()
    @IsString()
    artId: string;
}