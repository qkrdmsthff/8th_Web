import { PAGINATION_ORDER } from "../enums/common";

export type CommonResponse<T> = {
    status : boolean;
    statusCode : number;
    message : string;
    data : T;
}

/*
export type CursorBasedResponse<T> = {
    map: any;
    items: any;
    status : boolean;
    statusCode : number;
    message : string;
    data : {
    data : T;
    nextCursor : number;
    hasNest : boolean;
    }
}
*/

export type CursorBasedResponse<T> = CommonResponse<{
    data : T;
    nextCursor : number | null;
    hasNext : boolean;
}>

export type PaginationDto = {
    cursor? : number;
    limit? : number;
    search? : string;
    order? : PAGINATION_ORDER;
}
