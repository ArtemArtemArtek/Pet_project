import { counterSchema } from "../../../../features/Counter";
import { authSchema } from "../../../../features/AuthModal";
import { userSchema } from "../../../../entities/User";
import { EnhancedStore, UnknownAction, Reducer, ReducersMapObject } from "@reduxjs/toolkit"

export interface StateSchema {
    counter: counterSchema
    user?: userSchema
    
    auth?: authSchema
}

export interface ReducerManagerInterface {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    // reduce: (state: StateSchema, action: UnknownAction) => StateSchema,
    reduce: Reducer<StateSchema>
    add: (key: StateSchemaKeys, reducer: Reducer) => void,
    remove: (key: StateSchemaKeys) => void
}

export interface ReducerManagerStore extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManagerInterface
}

export type StateSchemaKeys = keyof StateSchema