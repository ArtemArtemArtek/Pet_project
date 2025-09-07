import { combineReducers, configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from '../types/types'
import { counterReducer } from '../../../../features/Counter/model/slice/counterSlice'
import { authReducer } from '../../../../features/AuthModal'
import { userReducer } from '../../../../entities/User'
import { useDispatch, useSelector } from 'react-redux'

export const universalStore = (initialState?: StateSchema) => {

    const reducers = combineReducers({
        counter: counterReducer,
        auth: authReducer,
        user: userReducer
    })
    return configureStore<StateSchema>({
        reducer: reducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}

export const store = universalStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppDispatch: () => AppDispatch = useDispatch
// export const useAppSelector = useSelector.withTypes<RootState>()