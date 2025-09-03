import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { authSchema } from '../types/AuthSchema'

const initialState: authSchema = {
  username: null,
  id: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {


  },
})


export const { actions: authActions } = authSlice

export const {reducer: authReducer} = authSlice
