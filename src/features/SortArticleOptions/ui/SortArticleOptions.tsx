import React, { useCallback, useEffect, useState } from "react";
import { ArticleSortFields } from "../../../entities/ArticleDetail/model/types/ArticleDetailTypes";
import { sortOrder } from "../../../shared/types";
import { useAppDispatch } from "../../../app/providers/StoreProvider/config/store";
import { articlesActions } from "../../../features/ArticleItems";
import { fetchArticlesData } from "../../../features/ArticleItems";
import { useDebounce } from "../../../shared/hooks/useDebounce";
import { Button, ButtonTheme } from "../../../shared/ui/Button/Button";
import { ArticleTabs } from "../../../features/ArticleItems/model/types/articleTypes";
import { useTranslation } from "react-i18next";
import cls from './SortArticleOptions.module.scss'

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
    cards: string[]
}

export const SortArticleOptions: React.FC<SortArticleOptionsProps> = (props) => {

    const { sortFieldsOptions, sortOrderOptions, defaultSearchParams, cards } = props
    const dispatch = useAppDispatch()
    const sort_field = defaultSearchParams.get('sort_field')
    const order = defaultSearchParams.get('order')
    const search_field = defaultSearchParams.get('search_field')
    const tabs = defaultSearchParams.get('tabs')
    const [selectTab, setSelectTab] = useState(tabs||'ALL')
    const {t} = useTranslation('articles')
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

    const sendTabs = (e: React.MouseEvent<HTMLButtonElement>) => {
        setSelectTab(e.currentTarget.value)
        dispatch(articlesActions.setTabs(e.currentTarget.value as ArticleTabs))
        dispatch(articlesActions.setPage(1))
        dispatch(fetchArticlesData({
            page: 1
        }))
    }


    return (
        <section className={cls.filtersWrapper}>
            <div>
                {t('Сортировать по')}
            <select className={cls.select_field} onChange={changeSortField}>
                {sortFieldsOptions.map((element, id) => {
                    return (
                        <option value={element.value} key={id} selected={sort_field == element.value ? true : false}>{element.title}</option>
                    )
                })}
            </select>
            {t('В порядке')}
            <select className={cls.select_field} onChange={changeSortOrder}>
                {sortOrderOptions.map((element, id) => {
                    return (
                        <option value={element.value} key={id} selected={order == element.value ? true : false}>{element.title}</option>
                    )
                })}
            </select>
            {t('Найти')}
            <input className={cls.select_field} defaultValue={search_field} onChange={changeSearchField} />
            </div>
            <div className={cls.tabs}>
            {cards.map((el) => {
                return (
                    <Button className={selectTab===el?cls.selectedTab:cls.tab} theme={ButtonTheme.OUTLINE} onClick={sendTabs} value={el}>{el}</Button>
                )
            })}
            </div>
        </section>
    )
}