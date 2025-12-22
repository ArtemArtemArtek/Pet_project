import { rtkApi } from "../../../../shared/api/RTKApi";
import { ArticleRating } from "../types/ratingTypes";

interface getArticleRatingProps{
        userID: string,
        articleID: string, 
}

export interface postArticleRatingProps{
    articleID: string
    userID: string
    rating: number
    feedback?: string
}

const ArticleRatingAPI = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<ArticleRating[], getArticleRatingProps>({
      query: ({articleID, userID}) => ({
        url:'/article-rating',
        params:{
              articleID: articleID,
              userID: userID 
        }
      }),
    }),
    postArticleRating: build.mutation<void, postArticleRatingProps>({
        query:(arg)=>({
          url:'/article-rating',
          method: 'POST',
          body: arg
        })
    })
  }),
})

export const useGetArticleRating = ArticleRatingAPI.useGetArticleRatingQuery
export const usePostArticleRating = ArticleRatingAPI.usePostArticleRatingMutation