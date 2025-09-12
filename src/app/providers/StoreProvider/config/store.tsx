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
        // auth: authReducer,
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })

    //@ts-ignore
    store.reducerManager = reducerManager

    return store
}

export const store = universalStore()

export type AppDispatch = ReturnType<typeof universalStore>['dispatch'];

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch