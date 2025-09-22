import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProfileSchema, UserProfile } from '../type/profileSchema'
import { LOCAL_USER_AUTH_KEY } from '../../../../shared/consts/consts'
import { fetchProfileData } from '../service/getProfileDataThunk'
// import { UserProfile } from '../type/profileSchema'

const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: true
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (state, action:PayloadAction<UserProfile>) => {
                state.data = action.payload
                state.isLoading = false
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                console.log(action.error.message)
                state.error = action.error.message
                state.isLoading = false
            })
    }
})


export const { actions: profileActions } = profileSlice

export const { reducer: profileReducer } = profileSlice
