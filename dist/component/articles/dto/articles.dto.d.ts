export declare class CreateDto {
    token: string;
    fingerPrint: string;
    uHeader: string;
    title: string;
    body: string;
}
export declare class FindDto {
    title: string;
    arcId: string;
    auther: string;
    createdAt: string;
    fingerPrint: string;
    pageNum: number;
    uHeader: string;
}
export declare class CommentDto {
    token: string;
    fingerPrint: string;
    uHeader: string;
    artId: string;
    body: string;
}
export declare class LikeDto {
    token: string;
    fingerPrint: string;
    uHeader: string;
    artId: string;
}
