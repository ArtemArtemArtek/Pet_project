import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { user, userActions } from "../../../../entities/User"
import { useDispatch } from "react-redux"
import { BASE_SERVER_URL, LOCAL_USER_AUTH_KEY } from "../../../../shared/consts/consts"

interface useData {
    password: string
    username: string
}

export const authUser = createAsyncThunk(
    'login/authUser',
    async (userData: useData, thunkAPI) => {
        // console.log('Попали в выхов')
        try {
            // const dispatch = useDispatch()//Проблема
            console.log(userData)
            const response = await axios.post<user>(BASE_SERVER_URL, userData)
            if (!response.data) {
                throw new Error()
            }
            localStorage.setItem(LOCAL_USER_AUTH_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setUserData(response.data))
            return response.data
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err.response.data)
        }
    },
)