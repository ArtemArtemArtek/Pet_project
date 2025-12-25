import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProfileSchema, UserProfile } from '../type/profileSchema'
import { fetchProfileData } from '../service/getProfileDataThunk'
import { updateProfileData } from '../service/updateProfileDataThunk'
import { validateErrorEnum } from '../type/profileSchema'
import { Currency, Country, Cities } from "../../../../shared/consts/enums";
// import { UserProfile } from '../type/profileSchema'

const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: true,
    validateError: undefined
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setFirstName(state, action:PayloadAction<string>){
            state.data.firstname = action.payload
        },
        setLastName(state, action:PayloadAction<string>){
            state.data.lastname = action.payload
        },
        setAge(state, action:PayloadAction<string>){
            state.data.age = action.payload
        },
        setAvatar(state, action:PayloadAction<string>){
            state.data.avatar = action.payload
        },
        setUsername(state, action:PayloadAction<string>){
            state.data.username = action.payload
        },
        setCurrency(state, action:PayloadAction<Currency>){
            state.data.currency = action.payload
        },
        setCountry(state, action:PayloadAction<Country>){
            state.data.country = action.payload
        },
        setCity(state, action:PayloadAction<Cities>){
            state.data.city = action.payload
        },
    },
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
                state.validateError=undefined
                state.isLoading = false
            })
            .addCase(updateProfileData.rejected, (state, action: PayloadAction<validateErrorEnum>) => {
                state.validateError = action.payload
                state.isLoading = false
            })
    }
})


export const { actions: profileActions } = profileSlice

export const { reducer: profileReducer } = profileSlice
