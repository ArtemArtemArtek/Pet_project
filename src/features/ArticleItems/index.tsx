import { ArticleItemList } from "./ui/ArticleItemsList/ArticleItemList";
import { articlesReducer, articlesActions } from "./model/slice/articlesSlice";
import { ArticleSchema } from "./model/types/articleTypes";
import { getArticlesData, getArticlesView } from "./model/selectors/selectArticlesData";
import { fetchArticlesData } from "./model/service/articleThunk";

export {fetchArticlesData, ArticleItemList, articlesReducer,articlesActions, ArticleSchema, getArticlesData, getArticlesView}