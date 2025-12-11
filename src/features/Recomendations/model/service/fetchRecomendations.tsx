import { rtkApi } from "../../../../shared/api/RTKApi";
import { ArticleDetailType } from "../../../../entities/ArticleDetail";
import { ArticleSortFields } from "../../../../entities/ArticleDetail/model/types/ArticleDetailTypes";

interface RecomendatinProps{
        limit: number,
        order: 'asc'|'desc', 
        sort: ArticleSortFields,
        type: string
}

const RecomendationAPI = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getRecomendationsArticles: build.query<ArticleDetailType[], RecomendatinProps>({
      query: ({limit, order, sort, type}) => ({
        url:'/articles',
        params:{
            _limit: limit,
            _order: order, 
            _sort: sort,
            type_like: type 
        }
      }),
    }),
  }),
})

export const useGetRecomendations = RecomendationAPI.useGetRecomendationsArticlesQuery