import { counterSchema } from "../../../../features/Counter";
import { authSchema } from "../../../../features/AuthModal";
import { userSchema } from "../../../../entities/User";
import { ArticleDetailSchema } from "../../../../../src/entities/ArticleDetail";
import { EnhancedStore, UnknownAction, Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { ProfileSchema } from "../../../../entities/ProfileData/model/type/profileSchema";
import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router-dom";
import { CommentSchema } from "../../../../entities/CommentData/model/types/types";
import { ArticleSchema } from "../../../../features/ArticleItems";
import { SaveScrollSchema } from "../../../../widgets/SaveScroll";


export interface StateSchema {
    counter: counterSchema
    user: userSchema
    save_scroll: SaveScrollSchema
    
    auth?: authSchema
    profile?:ProfileSchema
    article_detail?: ArticleDetailSchema
    articles?:ArticleSchema
    comments?:CommentSchema
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

export interface ThunkExtraArgument{
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkType<T>{
    rejectWithValue: T
    extra: ThunkExtraArgument
    state: StateSchema
}

export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;