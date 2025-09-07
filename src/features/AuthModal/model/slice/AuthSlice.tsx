import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { authSchema } from '../types/AuthSchema'
import { authUser } from '../service/asyncThunk'

const initialState: authSchema = {
  username: '',
  password: '',
  isLoading: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
      setLogin:(state, action:PayloadAction<string>)=>{
        state.username=action.payload
      },
      setPassword: (state, action: PayloadAction<string>)=>{
        state.password=action.payload
      }
  },
  extraReducers:(builder)=>{
    builder
    .addCase(authUser.pending,(state)=>{
      state.isLoading=true
    })
    .addCase(authUser.fulfilled, (state)=>{
      state.error = undefined
      state.isLoading = false
    })
    .addCase(authUser.rejected, (state, action)=>{
      console.log(action.error.message)
      state.error = action.error.message
      state.isLoading = false
    })
  }
})


export const { actions: authActions } = authSlice

export const {reducer: authReducer} = authSlice
