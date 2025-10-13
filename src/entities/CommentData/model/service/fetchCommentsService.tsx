import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkExtraArgument, ThunkType } from "../../../../app/providers/StoreProvider"
import { CommentType } from "../../../../features/Comment"

export const fetchCommentsData = createAsyncThunk<CommentType[], number|string|undefined, ThunkType<string>>(
    'article/commentsData',
    async (articleId, thunkAPI) => {
        console.log('Попали в редюсер комментария')
        const {extra, rejectWithValue} = thunkAPI
        try {
            const response = await extra.api.get<CommentType[]>('/comments',{
                params:{
                    articleId,
                    // include: 'user'
                    _expand: 'user',
                }
            })
            console.log(response)
            return response.data
        } catch (err) {
            console.log(err)
            return rejectWithValue(err)
        }
    },
)