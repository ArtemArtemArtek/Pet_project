import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { user, userActions } from "../../../../entities/User"
import { useDispatch } from "react-redux"
import { BASE_SERVER_URL, LOCAL_USER_AUTH_KEY } from "../../../../shared/consts/consts"
import { ThunkExtraArgument, ThunkType } from "../../../../app/providers/StoreProvider"

interface useData {
    password: string
    username: string
}

export const authUser = createAsyncThunk<user, useData, ThunkType<string>>(
    'login/authUser',
    async (userData: useData, thunkAPI) => {
        const {extra, dispatch, rejectWithValue} = thunkAPI
        try {
            console.log(userData)
            // thunkAPI.extra
            
            // const response = await axios.post<user>(BASE_SERVER_URL, userData)
            const response = await extra.api.post<user>('/login', userData)
            if (!response.data) {
                throw new Error()
            }
            localStorage.setItem(LOCAL_USER_AUTH_KEY, JSON.stringify(response.data))
            dispatch(userActions.setUserData(response.data))
            return response.data
        } catch (err) {
            console.log(err)
            return rejectWithValue(err.response.data)
        }
    },
)