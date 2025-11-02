import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkType } from "../../../../app/providers/StoreProvider"
import { ArticleDetailType } from "../../../../entities/ArticleDetail/model/types/ArticleDetailTypes"
import { ArticleSortFields } from "../../../../entities/ArticleDetail/model/types/ArticleDetailTypes";
import { ArticleType } from "../../../../entities/ArticleDetail/model/types/ArticleDetailTypes";

// interface FetchRecomendationProps {
//     type: ArticleType;
// }

export const fetchRecomendationData = createAsyncThunk<ArticleDetailType[], string, ThunkType<string>>(
    'article/recomendationData',
    async (type, thunkAPI) => {
        console.log('Попали в редюсер рекомендаций')
        const { extra, rejectWithValue, getState } = thunkAPI
        try {
            const response = await extra.api.get<ArticleDetailType[]>('/articles', {
                params: {
                    _limit: 4,
                    _order: 'asc',                        
                    _sort: ArticleSortFields.VIEWS,
                    type_like: type   
                }
            })
            console.log(response)
            if (!response.data) {
                throw new Error();
            }
            return response.data
        } catch (err) {
            return rejectWithValue(err)
        }
    },
)