import { combineReducers, configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from '../types/types'
import { counterReducer } from '../../../../features/Counter/model/slice/counterSlice'
import { authReducer } from '../../../../features/AuthModal'
import { userReducer } from '../../../../entities/User'
import { useDispatch, useSelector } from 'react-redux'
import { createReducerManager } from './reducerManager'

export const universalStore = (initialState?: StateSchema) => {

    // const rootReducers = combineReducers({
    //     counter: counterReducer,
    //     auth: authReducer,
    //     user: userReducer
    // })


    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        auth: authReducer,
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })

    //@ts-ignore
    store.reducerManager = reducerManager

    return store
}

export const store = universalStore()


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch