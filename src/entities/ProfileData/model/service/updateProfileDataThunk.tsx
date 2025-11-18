import { createAsyncThunk } from "@reduxjs/toolkit"
// import { userSchema } from "src/entities/User"
import { ThunkType } from "../../../../app/providers/StoreProvider"
import { UserProfile } from "../type/profileSchema"
import { getProfileData } from "../selectors/getProfileData"
import { validateProfileData } from "./validateProfileData/validateProfileData"
import { getUser } from "../../../../entities/User"

export const updateProfileData = createAsyncThunk<UserProfile, UserProfile, ThunkType<string>>(
    'profile/updateUserData',
    async (userData: UserProfile, thunkAPI) => {
        console.log('Попали в редюсер обновления профиля')
        const {extra, rejectWithValue,getState } = thunkAPI
        try {
            const {data: profileData} = getProfileData(getState())
            const {isAuth:authData} = getUser(getState())
            
            // const validateError = validateProfileData(userData)
            // console.log('ERRORS',validateError)
            // if(Object.keys(validateError).length){
            //     return rejectWithValue(validateError)
            // }
            const response = await extra.api.put<UserProfile>(`/profile/${authData.id}`, profileData)
            return response.data
        } catch (err) {
            console.log(err)
            return rejectWithValue(err)
        }
    },
)