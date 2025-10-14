import { createAsyncThunk } from "@reduxjs/toolkit"
import { CommentType } from "../../../../features/Comment"
import { ThunkType } from "../../../../app/providers/StoreProvider"
import { getArticleDetailData } from "../../../../entities/ArticleDetail"
import { getUser } from "../../../../entities/User"
import { fetchCommentsData } from "./fetchCommentsService"

export const addNewCommentData = createAsyncThunk<CommentType, string, ThunkType<string>>(
    'comments/addComment',
    async (commentText: string, thunkAPI) => {
        console.log('Попали в редюсер создания комментария')
        const {extra, rejectWithValue, getState, dispatch} = thunkAPI
        
        const userData = getUser(getState())
        const articleData = getArticleDetailData(getState())

        try {
            const response = await extra.api.post<CommentType>('/comments', {
                userId: userData.isAuth.id,
                articleId: articleData.data.id,
                body: commentText
            })
            dispatch(fetchCommentsData(articleData.data.id))
            console.log(response)
            return response.data
        } catch (err) {
            return rejectWithValue(err)
        }
    },
)