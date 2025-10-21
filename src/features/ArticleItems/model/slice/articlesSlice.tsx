import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleDetailType } from '../../../../entities/ArticleDetail/model/types/ArticleDetailTypes'
import { StateSchema } from '../../../../app/providers/StoreProvider'
import { ArticleSchema } from '../types/articleTypes'
import { fetchArticlesData } from '../service/articleThunk'
import { ArticlesView } from '../types/articleTypes'
import { LOCAL_ARTICLES_VIEW } from '../../../../shared/consts/consts'
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
            hasMore: true
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticlesView>) => {
      // console.log(action.payload)
      state.view = action.payload
      localStorage.setItem(LOCAL_ARTICLES_VIEW, action.payload)
      state.blocks = action.payload === ArticlesView.BIG ? 4 : 9
      console.log(state.blocks)
    },
    initState: (state) => {
      const view = localStorage.getItem(LOCAL_ARTICLES_VIEW) as ArticlesView;
      state.view = view;
      state.blocks = view === ArticlesView.BIG ? 4 : 9;
    },
            setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesData.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticlesData.fulfilled, (state, action: PayloadAction<ArticleDetailType[]>) => {
        articlesAdapter.addMany(state, action.payload)
        state.hasMore = action.payload.length > 0;
        state.isLoading = false
      })
      .addCase(fetchArticlesData.rejected, (state, action) => {
        state.error = action.payload as string
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
