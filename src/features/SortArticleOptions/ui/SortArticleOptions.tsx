import React, { useCallback, useEffect, useState } from "react";
import { ArticleSortFields } from "../../../entities/ArticleDetail/model/types/ArticleDetailTypes";
import { sortOrder } from "../../../shared/types";
import { useAppDispatch } from "../../../app/providers/StoreProvider/config/store";
import { articlesActions } from "../../../features/ArticleItems";
import { fetchArticlesData } from "../../../features/ArticleItems";
import { useDebounce } from "../../../shared/hooks/useDebounce";
import { useSearchParams } from "react-router-dom";

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
    defaultSearchParams: URLSearchParams
}

export const SortArticleOptions: React.FC<SortArticleOptionsProps> = (props) => {

    const { sortFieldsOptions, sortOrderOptions, defaultSearchParams } = props
    const dispatch = useAppDispatch()
    const sort_field = defaultSearchParams.get('sort_field')
    const order = defaultSearchParams.get('order')
    const search_field = defaultSearchParams.get('search_field')
    const fetchData = useCallback(() => dispatch(fetchArticlesData({
        page: 1
    })), [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 500)

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

    const changeSearchField = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(articlesActions.setSearch(e.target.value))
        dispatch(articlesActions.setPage(1))
        debouncedFetchData()
        // dispatch(fetchArticlesData({
        //     page: 1
        // }))
    }


    return (
        <section>
            <select onChange={changeSortField}>
                {sortFieldsOptions.map((element, id) => {
                    return (
                        <option value={element.value} key={id} selected={sort_field == element.value ? true : false}>{element.title}</option>
                    )
                })}
            </select>
            <select onChange={changeSortOrder}>
                {sortOrderOptions.map((element, id) => {
                    return (
                        <option value={element.value} key={id} selected={order == element.value ? true : false}>{element.title}</option>
                    )
                })}
            </select>
            <input defaultValue={search_field} onChange={changeSearchField} />
        </section>
    )
}