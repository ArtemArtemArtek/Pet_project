import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { authData, user } from '../type/userSchema'
import { LOCAL_USER_AUTH_KEY } from '../../../../shared/consts/consts'

const initialState: authData = {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
        setUserData: (state, action: PayloadAction<user>)=>{
            state.isAuth=action.payload
        },
        initUserData: (state)=>{
            const data = localStorage.getItem(LOCAL_USER_AUTH_KEY)
            if(data){
                state.isAuth=JSON.parse(data)
            }
        },
        logout:(state)=>{
            state.isAuth=undefined
            localStorage.getItem(LOCAL_USER_AUTH_KEY)
        }
  },
})


export const { actions: userActions } = userSlice

export const {reducer: userReducer} = userSlice
