import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleDetailType } from '../../../../entities/ArticleDetail/model/types/ArticleDetailTypes'
import { StateSchema } from '../../../../app/providers/StoreProvider'
import { ArticleSchema } from '../types/articleTypes'
import { fetchArticlesData } from '../service/articleThunk'
import { ArticlesView } from '../types/articleTypes'
import { LOCAL_ARTICLES_VIEW } from '../../../../shared/consts/consts'
import { sortOrder } from '../../../../shared/types'
import { ArticleSortFields } from '../../../../entities/ArticleDetail/model/types/ArticleDetailTypes'
import { Params } from 'react-router-dom'
// import { sortOrder } from '../../../../shared/types'

// import { fetchCommentsData } from '../service/fetchCommentsService'

const articlesAdapter = createEntityAdapter<ArticleDetailType, number>({
  selectId: (article: ArticleDetailType) => Number(article.id),
})

const articletSlice = createSlice({
  name: 'articles',
  initialState: articlesAdapter.getInitialState<ArticleSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticlesView.SMALL,
    hasMore: true,
    _inited: false,
    sort_order: 'desc',
    sort_field: ArticleSortFields.CREATED_AT,
    search: '',
    isRerender: false
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticlesView>) => {
      // console.log(action.payload)
      state.view = action.payload
      localStorage.setItem(LOCAL_ARTICLES_VIEW, action.payload)
      state.blocks = action.payload === ArticlesView.BIG ? 4 : 9
      console.log(state.blocks)
    },
    initState: (state, action: PayloadAction<URLSearchParams>) => {
      const view = localStorage.getItem(LOCAL_ARTICLES_VIEW) as ArticlesView;
      state.view = view;
      state.blocks = view === ArticlesView.BIG ? 4 : 9;
      console.log(action.payload)
      if(action.payload.get('sort_field')){
        state.sort_field = action.payload.get('sort_field') as ArticleSortFields
      }
      if(action.payload.get('order')){
        state.sort_order = action.payload.get('order') as sortOrder
      }
      if(action.payload.get('search_field')){
        state.search = action.payload.get('search_field')
      }
      state._inited = true
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<sortOrder>) => {
      state.sort_order = action.payload;
      state.isRerender = true
    },
    setSortField: (state, action: PayloadAction<ArticleSortFields>) => {
      state.sort_field = action.payload;
      state.isRerender = true
      console.log(state.sort_field)
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      state.isRerender = true
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesData.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticlesData.fulfilled, (state, action: PayloadAction<ArticleDetailType[]>) => {
        if(state.isRerender){
        articlesAdapter.setAll(state, action.payload)  
        }else{
          articlesAdapter.addMany(state, action.payload)
        }
        // articlesAdapter.setAll(state, action.payload)
        state.hasMore = action.payload.length >= state.blocks;
        state.isRerender = false
        state.isLoading = false
      })
      .addCase(fetchArticlesData.rejected, (state, action) => {
        state.error = action.payload as string
        state.isRerender = false
        state.isLoading = false
      })
  }
},
)

export const articlesSelectors = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articles || articlesAdapter.getInitialState()
)

export const { reducer: articlesReducer } = articletSlice
export const { actions: articlesActions } = articletSlice
