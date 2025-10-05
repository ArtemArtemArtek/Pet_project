import { ArticleDetailType } from "./ArticleDetailTypes";

export interface ArticleDetailSchema{
    data?:ArticleDetailType,
    error?: string,
    isLoading: boolean,
}