import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkType } from '../../../../app/providers/StoreProvider';
import { ArticleDetailType } from '../types/ArticleDetailTypes';

export const fetchArticleDetail = createAsyncThunk<
    ArticleDetailType,
    number,
    ThunkType<string>
>('articles/articleDetail', async (articleID: number, thunkAPI) => {
    console.log('Попали в редюсер статьи конкретной');
    const { extra, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.get<ArticleDetailType>(
            `/articles/${articleID}`,
        );
        return response.data;
    } catch (err) {
        console.log(err);
        return rejectWithValue(err);
    }
});
