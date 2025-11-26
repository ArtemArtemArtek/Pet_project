import { combineReducers, configureStore, ReducersMapObject, Tuple } from '@reduxjs/toolkit'
import type { StateSchema, ThunkExtraArgument } from '../types/types'
import { counterReducer } from '../../../../features/Counter/model/slice/counterSlice'
import { authReducer } from '../../../../features/AuthModal'
import { userReducer } from '../../../../entities/User'
import { useDispatch } from 'react-redux'
import { createReducerManager } from './reducerManager'
import { $api } from '../../../../shared/api/instanceApi'
import { NavigateOptions, To } from 'react-router-dom'
import { saveScrollReducer } from '../../../../widgets/SaveScroll'
import { rtkApi } from '../../../../shared/api/RTKApi'


export const universalStore = (initialState?: StateSchema, navigate?: (to: To, options?: NavigateOptions) => void) => {

    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        save_scroll: saveScrollReducer,
        [rtkApi.reducerPath]: rtkApi.reducer
    }

    const reducerManager = createReducerManager(rootReducers)
    // const navigate = useNavigate()

    const extraArg: ThunkExtraArgument={
        api: $api,
        navigate
    }

    console.log('RENDER')

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,

        middleware:(getDefaultMiddleware) => 
            //@ts-ignore
            getDefaultMiddleware({
            thunk:{
                extraArgument: extraArg
            }
        }).concat(rtkApi.middleware) 

    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export const store = universalStore()

export type AppDispatch = ReturnType<typeof universalStore>['dispatch'];

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch