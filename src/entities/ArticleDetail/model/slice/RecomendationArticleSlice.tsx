import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { ArticleDetailType } from '../../../../entities/ArticleDetail/model/types/ArticleDetailTypes';
import { StateSchema } from '../../../../app/providers/StoreProvider';
import { fetchRecomendationData } from '../service/getRecomendation';
import { RecomendationSchema } from '../types/ArticleDetailSchema';

const recomendationAdapter = createEntityAdapter<ArticleDetailType, number>({
    selectId: (article: ArticleDetailType) => Number(article.id),
});

const recomendationSlice = createSlice({
    name: 'articles',
    initialState: recomendationAdapter.getInitialState<RecomendationSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {
        // setView: (state, action: PayloadAction<ArticlesView>) => {
        //   // console.log(action.payload)
        //   state.view = action.payload
        //   localStorage.setItem(LOCAL_ARTICLES_VIEW, action.payload)
        //   state.blocks = action.payload === ArticlesView.BIG ? 4 : 9
        //   console.log(state.blocks)
        // },
        // initState: (state, action: PayloadAction<URLSearchParams>) => {
        //   const view = localStorage.getItem(LOCAL_ARTICLES_VIEW) as ArticlesView;
        //   state.view = view;
        //   state.blocks = view === ArticlesView.BIG ? 4 : 9;
        //   if(action.payload.get('sort_field')){
        //     state.sort_field = action.payload.get('sort_field') as ArticleSortFields
        //   }
        //   if(action.payload.get('order')){
        //     state.sort_order = action.payload.get('order') as sortOrder
        //   }
        //   if(action.payload.get('search_field')){
        //     state.search = action.payload.get('search_field')
        //   }
        //   if(action.payload.get('tabs')){
        //     state.tabs = action.payload.get('tabs') as ArticleTabs
        //   }
        //   state._inited = true
        // },
        // setPage: (state, action: PayloadAction<number>) => {
        //   state.page = action.payload;
        // },
        // setOrder: (state, action: PayloadAction<sortOrder>) => {
        //   state.sort_order = action.payload;
        //   state.isRerender = true
        // },
        // setSortField: (state, action: PayloadAction<ArticleSortFields>) => {
        //   state.sort_field = action.payload;
        //   state.isRerender = true
        //   console.log(state.sort_field)
        // },
        // setSearch: (state, action: PayloadAction<string>) => {
        //   state.search = action.payload;
        //   state.isRerender = true
        // },
        // setTabs: (state, action: PayloadAction<ArticleTabs>) => {
        //   state.tabs = action.payload;
        //   state.isRerender = true
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecomendationData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchRecomendationData.fulfilled,
                (state, action: PayloadAction<ArticleDetailType[]>) => {
                    recomendationAdapter.setAll(state, action.payload);
                    // articlesAdapter.setAll(state, action.payload)
                    state.isLoading = false;
                },
            )
            .addCase(fetchRecomendationData.rejected, (state, action) => {
                state.error = action.payload as string;
                state.isLoading = false;
            });
    },
});

export const recomendationsSelectors =
    recomendationAdapter.getSelectors<StateSchema>(
        (state) =>
            state.recomendation || recomendationAdapter.getInitialState(),
    );

export const { reducer: recomendationReducer } = recomendationSlice;
export const { actions: recomendationActions } = recomendationSlice;
