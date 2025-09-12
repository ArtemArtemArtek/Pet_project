import { counterSchema } from "../../../../features/Counter";
import { authSchema } from "../../../../features/AuthModal";
import { userSchema } from "../../../../entities/User";
import { EnhancedStore, UnknownAction, Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { ProfileSchema } from "../../../../entities/ProfileData/model/type/profileSchema";

export interface StateSchema {
    counter: counterSchema
    user: userSchema
    
    auth?: authSchema
    profile?:ProfileSchema
}

export interface ReducerManagerInterface {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: Reducer<StateSchema>
    add: (key: StateSchemaKeys, reducer: Reducer) => void,
    remove: (key: StateSchemaKeys) => void
}

export interface ReducerManagerStore extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManagerInterface
}

export type StateSchemaKeys = keyof StateSchema

export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;