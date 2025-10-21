import { StateSchema } from "../../../../app/providers/StoreProvider"

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