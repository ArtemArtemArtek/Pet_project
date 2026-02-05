import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkType } from '../../../../app/providers/StoreProvider';
import { ArticleDetailType } from '../../../../entities/ArticleDetail/model/types/ArticleDetailTypes';
import {
    getArticlesPageLimit,
    getArticlesOrder,
    getArticlesSearchField,
    getArticlesSortField,
    getArticlesPageNum,
} from '../selectors/selectArticlesData';
import { addQueryParams } from '../../../../shared/url/addQueryParams';
import { getArticlesTabs } from '../selectors/selectArticlesData';
import { ArticleTabs } from '../types/articleTypes';

interface FetchArticlesListProps {
    page?: number;
}

export const fetchArticlesData = createAsyncThunk<
    ArticleDetailType[],
    FetchArticlesListProps,
    ThunkType<string>
>('article/articlesData', async (props, thunkAPI) => {
    console.log('Попали в редюсер статей');
    const { extra, rejectWithValue, getState } = thunkAPI;
    const limit = getArticlesPageLimit(getState());
    const sort_field = getArticlesSortField(getState());
    const order = getArticlesOrder(getState());
    const search_field = getArticlesSearchField(getState());
    const page = getArticlesPageNum(getState()) || 1;
    const tabs = getArticlesTabs(getState());
    // const [searchParams, setSearchParams] = useSearchParams();

    // setSearchParams({ sort: 'fdsfsfd' })

    try {
        addQueryParams({
            sort_field,
            order,
            search_field,
            tabs,
        });
        const response = await extra.api.get<ArticleDetailType[]>('/articles', {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
                _sort: sort_field,
                _order: order,
                q: search_field,
                type_like: tabs === ArticleTabs.ALL ? undefined : tabs,
            },
        });
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (err) {
        return rejectWithValue(err);
    }
});
