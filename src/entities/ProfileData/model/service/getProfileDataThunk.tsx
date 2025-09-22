import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkExtraArgument, ThunkType } from "../../../../app/providers/StoreProvider"
import { UserProfile } from "../type/profileSchema"


export const fetchProfileData = createAsyncThunk<UserProfile, void, ThunkType<string>>(
    'profile/userData',
    async (_, thunkAPI) => {
        console.log('Попали в редюсер профиля')
        const {extra, rejectWithValue} = thunkAPI
        try {
            const response = await extra.api.get<UserProfile>('/profile')
            return response.data
        } catch (err) {
            console.log(err)
            return rejectWithValue(err)
        }
    },
)