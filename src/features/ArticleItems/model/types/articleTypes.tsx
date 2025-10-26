import { EntityState } from "@reduxjs/toolkit"
import {ArticleDetailType } from "../../../../entities/ArticleDetail/model/types/ArticleDetailTypes"
import { sortOrder } from "../../../../shared/types"
import { ArticleSortFields } from "../../../../entities/ArticleDetail/model/types/ArticleDetailTypes"

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

    //filtred data
    sort_order: sortOrder
    sort_field: ArticleSortFields
    search: string
    isRerender: boolean
}