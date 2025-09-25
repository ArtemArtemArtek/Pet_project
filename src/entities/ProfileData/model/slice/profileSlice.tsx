import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProfileSchema, UserProfile } from '../type/profileSchema'
import { LOCAL_USER_AUTH_KEY } from '../../../../shared/consts/consts'
import { fetchProfileData } from '../service/getProfileDataThunk'
import { updateProfileData } from '../service/updateProfileDataThunk'
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
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (state, action:PayloadAction<UserProfile>) => {
                state.data = action.payload
                state.isLoading = false
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.error.message
                state.isLoading = false
            })
            .addCase(updateProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(updateProfileData.fulfilled, (state, action:PayloadAction<UserProfile>) => {
                state.data = action.payload
                state.isLoading = false
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.error = action.error.message
                state.isLoading = false
            })
    }
})


export const { actions: profileActions } = profileSlice

export const { reducer: profileReducer } = profileSlice
