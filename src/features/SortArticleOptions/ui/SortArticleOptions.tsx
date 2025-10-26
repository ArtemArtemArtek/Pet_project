import React, { useState } from "react";
import { ArticleSortFields } from "../../../entities/ArticleDetail/model/types/ArticleDetailTypes";
import { sortOrder } from "../../../shared/types";
import { useAppDispatch } from "../../../app/providers/StoreProvider/config/store";
import { articlesActions } from "../../../features/ArticleItems";
import { fetchArticlesData } from "../../../features/ArticleItems";

export interface sortFieldData {
    title: string
    value: ArticleSortFields
}

export interface sortOrderData {
    title: string
    value: sortOrder
}

interface SortArticleOptionsProps {
    sortFieldsOptions: sortFieldData[]
    sortOrderOptions: sortOrderData[]
}

export const SortArticleOptions: React.FC<SortArticleOptionsProps> = (props) => {

    const { sortFieldsOptions, sortOrderOptions } = props
    const dispatch = useAppDispatch()


    const changeSortField = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(articlesActions.setSortField(e.target.value as ArticleSortFields))
        dispatch(articlesActions.setPage(1))
        dispatch(fetchArticlesData({
            page: 1
        }))
    }

    const changeSortOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(articlesActions.setOrder(e.target.value as sortOrder))
        dispatch(articlesActions.setPage(1))
        dispatch(fetchArticlesData({
            page: 1
        }))
    }
    return (
        <section>
            <select onChange={changeSortField}>
                {sortFieldsOptions.map((element, id) => {
                    return (
                        <option value={element.value} key={id}>{element.title}</option>
                    )
                })}
            </select>
            <select onChange={changeSortOrder}>
                {sortOrderOptions.map((element, id) => {
                    return (
                        <option value={element.value} key={id}>{element.title}</option>
                    )
                })}
            </select>
        </section>
    )
}