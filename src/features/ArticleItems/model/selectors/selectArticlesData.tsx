import { StateSchema } from "../../../../app/providers/StoreProvider"
import { ArticleSortFields } from "../../../../entities/ArticleDetail/model/types/ArticleDetailTypes"
export const getArticlesData=(state:StateSchema)=>{
    return state.articles
}

export const getArticlesView=(state:StateSchema)=>{
    return state.articles.view
}
export const getArticlesPageIsLoading = (state: StateSchema) => state.articles?.isLoading || false;
export const getArticlesPageNum = (state: StateSchema) => state.articles?.page || 1;
export const getArticlesPageHasMore = (state: StateSchema) => state.articles?.hasMore;
export const getArticlesPageLimit = (state: StateSchema) => state.articles?.blocks || 9;
export const getArticlesPageInited = (state: StateSchema) => state.articles?._inited || false;
export const getArticlesSortField = (state: StateSchema) => state.articles?.sort_field || ArticleSortFields.CREATED_AT;
export const getArticlesOrder = (state: StateSchema) => state.articles?.sort_order || 'asc';
export const getArticlesSearchField = (state: StateSchema) => state.articles?.search || '';
