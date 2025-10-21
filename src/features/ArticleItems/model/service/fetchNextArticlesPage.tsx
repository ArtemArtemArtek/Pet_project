import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkType } from "../../../../app/providers/StoreProvider"
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from '../selectors/selectArticlesData';
import { articlesActions } from '../slice/articlesSlice';
import { fetchArticlesData } from './articleThunk';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkType<string>
    >(
        'articlesPage/fetchNextArticlesPage',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const hasMore = getArticlesPageHasMore(getState());
            const page = getArticlesPageNum(getState());
            const isLoading = getArticlesPageIsLoading(getState());

            if (hasMore && !isLoading) {
                dispatch(articlesActions.setPage(page + 1));
                dispatch(fetchArticlesData({
                    page: page + 1,
                }));
            }
        },
    );