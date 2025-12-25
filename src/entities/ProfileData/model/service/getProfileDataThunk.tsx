import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkType } from "../../../../app/providers/StoreProvider"
import { UserProfile } from "../type/profileSchema"


export const fetchProfileData = createAsyncThunk<UserProfile, string, ThunkType<string>>(
    'profile/userData',
    async (userID:string, thunkAPI) => {
        console.log('Попали в редюсер профиля')
        const {extra, rejectWithValue} = thunkAPI
        try {
            const response = await extra.api.get<UserProfile>(`/profile/${userID}`)
            return response.data
        } catch (err) {
            console.log(err)
            return rejectWithValue(err)
        }
    },
)