import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProfileSchema, userProfile } from '../type/profileSchema'
import { LOCAL_USER_AUTH_KEY } from '../../../../shared/consts/consts'

const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: true
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileData: (state, action: PayloadAction<userProfile>) => {
            state.data = action.payload
        },
    }
})


export const { actions: profileActions } = profileSlice

export const { reducer: profileReducer } = profileSlice
