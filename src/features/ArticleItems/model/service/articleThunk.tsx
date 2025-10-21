import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkType } from "../../../../app/providers/StoreProvider"
import { ArticleDetailType } from "../../../../entities/ArticleDetail/model/types/ArticleDetailTypes"
import { getArticlesData, getArticlesPageLimit } from "../selectors/selectArticlesData"

interface FetchArticlesListProps {
    page?: number;
}

export const fetchArticlesData = createAsyncThunk<ArticleDetailType[], FetchArticlesListProps, ThunkType<string>>(
    'article/articlesData',
    async (props, thunkAPI) => {
        console.log('Попали в редюсер статей')
        const {extra, rejectWithValue, getState} = thunkAPI
         const { page = 1 } = props;
          const limit = getArticlesPageLimit(getState());
        try {
            const response = await extra.api.get<ArticleDetailType[]>('/articles',{
                params:{
                    _expand: 'user',
                    _limit:limit,
                    _page:page
                }
            })
                       if (!response.data) {
                    throw new Error();
                }
            return response.data
        } catch (err) {
            return rejectWithValue(err)
        }
    },
)