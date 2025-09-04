import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { user, userActions } from "../../../../entities/User"
import { useDispatch } from "react-redux"
import { BASE_SERVER_URL, LOCAL_USER_AUTH_KEY } from "../../../../shared/consts/consts"

interface useData {
    password: string
    login: string
}

export const authUser = createAsyncThunk(
    'login/authUser',
    async (userData: useData, { rejectWithValue }) => {
        const dispatch = useDispatch()
        try {
            const response = await axios.post<user>(BASE_SERVER_URL, userData)
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