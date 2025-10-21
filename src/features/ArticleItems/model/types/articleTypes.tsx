import { EntityState } from "@reduxjs/toolkit"
import {ArticleDetailType } from "../../../../entities/ArticleDetail/model/types/ArticleDetailTypes"

export enum ArticlesView{
    BIG='BIG',
    SMALL='SMALL'
}

export interface ArticleSchema extends EntityState<ArticleDetailType, number>{
    isLoading: boolean
    error: string
    view:ArticlesView
    blocks?: number
    page?:number
    hasMore:boolean

    _inited?:boolean
}