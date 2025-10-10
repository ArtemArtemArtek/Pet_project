import {createEntityAdapter, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { CommentSchema } from '../types/types'
import { CommentType } from '../../../../features/Comment'
import { StateSchema } from '../../../../app/providers/StoreProvider'
import { fetchCommentsData } from '../service/fetchCommentsService'

const commentsAdapter = createEntityAdapter<CommentType, number>({
  selectId: (comment:CommentType) => comment.id,
})

const commentSlice = createSlice({
  name: 'comments',
  initialState: commentsAdapter.getInitialState<CommentSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchCommentsData.fulfilled, (state, action:PayloadAction<CommentType[]>) => {
                commentsAdapter.setAll(state, action.payload)                
                state.isLoading = false
            })
            .addCase(fetchCommentsData.rejected, (state, action) => {
                state.error = action.payload as string
                state.isLoading = false
            })
    }
  },
)

export const commentSelectors = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.comments || commentsAdapter.getInitialState()
)

export const { reducer: commentReducer } = commentSlice