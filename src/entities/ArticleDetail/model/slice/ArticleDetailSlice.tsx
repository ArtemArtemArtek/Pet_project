import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ArticleDetailSchema } from '../types/ArticleDetailSchema'
import { fetchArticleDetail } from '../service/getArticleDetail'
import { ArticleDetailType } from '../types/ArticleDetailTypes'

const initialState: ArticleDetailSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
}

const articleDetailSlice = createSlice({
    name: 'article_detail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleDetail.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchArticleDetail.fulfilled, (state, action:PayloadAction<ArticleDetailType>) => {
                state.data = action.payload
                state.isLoading = false
                console.log('Попали в фулфилд')
                console.log(state.data)
                
            })
            .addCase(fetchArticleDetail.rejected, (state, action) => {
                state.error = action.error.message
                state.isLoading = false
            })
    }
})


export const { actions: articleDetailActions } = articleDetailSlice
export const { reducer: articleDetailReducer } = articleDetailSlice