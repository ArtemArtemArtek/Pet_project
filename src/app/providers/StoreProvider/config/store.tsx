import { combineReducers, configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema, ThunkExtraArgument } from '../types/types'
import { counterReducer } from '../../../../features/Counter/model/slice/counterSlice'
import { authReducer } from '../../../../features/AuthModal'
import { userReducer } from '../../../../entities/User'
import { useDispatch, useSelector } from 'react-redux'
import { createReducerManager } from './reducerManager'
import { $api } from '../../../../shared/api/instanceApi'
import { NavigateOptions, To, useNavigate } from 'react-router-dom'


export const universalStore = (initialState?: StateSchema, navigate?: (to: To, options?: NavigateOptions) => void) => {

    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducers)
    // const navigate = useNavigate()

    const extraArg: ThunkExtraArgument={
        api: $api,
        navigate
    }

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,

        middleware:(getDefaultMiddleware) => getDefaultMiddleware({
            thunk:{
                extraArgument: extraArg
            }
        }),
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export const store = universalStore()

export type AppDispatch = ReturnType<typeof universalStore>['dispatch'];

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch