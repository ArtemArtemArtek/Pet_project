import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SaveScrollSchema } from '../types/SaveScrollTypes'

const initialState: SaveScrollSchema = {
    scroll: {}
}

const saveScrollSlice = createSlice({
  name: 'save_scroll',
  initialState,
  reducers: {
      setScroll:(state, {payload}:PayloadAction<{path: string, scroll: number}>)=>{
        console.log(payload)
        state.scroll[payload.path] = payload.scroll
      }
  },
})


export const { actions: saveScrollActions } = saveScrollSlice

export const {reducer: saveScrollReducer} = saveScrollSlice
