import type { ArticleDetailType } from "./model/types/ArticleDetailTypes";
import type { ArticleDetailSchema, RecomendationSchema } from "./model/types/ArticleDetailSchema";
import { ArticleDetail } from "./ui/ArticleDetailComponent/ArticleDetail";
import { getArticleDetailData } from "./model/selectors/getArticleData";
import { recomendationReducer, recomendationActions, recomendationsSelectors } from "./model/slice/RecomendationArticleSlice";
import { fetchRecomendationData } from "./model/service/getRecomendation";
import { getRecomendationData } from "./model/selectors/getRecomendationData";

export {
    ArticleDetailSchema, ArticleDetailType, ArticleDetail, getArticleDetailData,
     RecomendationSchema, recomendationsSelectors, recomendationActions,
    recomendationReducer, fetchRecomendationData, getRecomendationData}