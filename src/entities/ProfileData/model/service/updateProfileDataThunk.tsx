import { createAsyncThunk } from "@reduxjs/toolkit"
// import { userSchema } from "src/entities/User"
import { ThunkType } from "../../../../app/providers/StoreProvider"
import { UserProfile } from "../type/profileSchema"
import { validateProfileData } from "./validateProfileData/validateProfileData"

export const updateProfileData = createAsyncThunk<UserProfile, UserProfile, ThunkType<string>>(
    'profile/updateUserData',
    async (userData: UserProfile, thunkAPI) => {
        console.log('Попали в редюсер обновления профиля')
        const {extra, rejectWithValue} = thunkAPI
        try {
            const validateError = validateProfileData(userData)
            if(Object.keys(validateError).length){
                return rejectWithValue(validateError)
            }
            const response = await extra.api.put<UserProfile>('/profile', userData)
            return response.data
        } catch (err) {
            console.log(err)
            return rejectWithValue(err)
        }
    },
)