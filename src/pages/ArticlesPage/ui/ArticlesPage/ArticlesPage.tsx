import React, { useCallback, useEffect, useMemo } from "react";
import cls from './ArticlesPage.module.scss'
import { useTranslation } from "react-i18next";
import { ArticleItemList } from "../../../../features/ArticleItems";
import { AsyncReducerWrapper, ReducerList } from "../../../../shared/lib/asyncReducerWrapper/asyncReducerWrapper";
import { articlesReducer } from "../../../../features/ArticleItems";
import { useAppDispatch } from "../../../../app/providers/StoreProvider/config/store";
import { fetchArticlesData } from "../../../../features/ArticleItems/model/service/articleThunk";
import { PageWrapper } from "../../../../widgets/PageWrapper/PageWrapper";
import { ArticlesView } from "../../../../features/ArticleItems/model/types/articleTypes";
import { LOCAL_ARTICLES_VIEW } from "../../../../shared/consts/consts";
import { articlesActions } from "../../../../features/ArticleItems";
import { fetchNextArticlesPage } from "../../../../features/ArticleItems/model/service/fetchNextArticlesPage";
import { getArticlesPageInited } from "../../../../features/ArticleItems/model/selectors/selectArticlesData";
import { useSelector } from "react-redux";
import { SortArticleOptions } from "../../../../features/SortArticleOptions";
import { ArticleSortFields } from "../../../../entities/ArticleDetail/model/types/ArticleDetailTypes";
import { sortOrder } from "../../../../shared/types";
import { sortOrderData, sortFieldData } from "../../../../features/SortArticleOptions/ui/SortArticleOptions";
import { useParams, useSearchParams } from 'react-router-dom';
import { Button } from "src/shared/ui/Button/Button";

const inputReducers: ReducerList = {
    articles: articlesReducer
}

export const ArticlesPage: React.FC = () => {

    const dispatch = useAppDispatch()
    const {t} = useTranslation('articles')
    const inited = useSelector(getArticlesPageInited)
    // const params = useParams();
    const [searchParams] = useSearchParams();

    console.log(searchParams)
    const onChangeView = useCallback((view: ArticlesView) => {
        dispatch(articlesActions.setView(view));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useEffect(() => {
        if (!inited) {
            dispatch(articlesActions.initState(searchParams))
            dispatch(fetchArticlesData({
                page: 1,
            }))
        }
        // eslint-disable-next-line
    }, [])

    const sortOptions=useMemo<sortFieldData[]>(()=>[
           {
            value: ArticleSortFields.CREATED_AT,
            title: t('Дате')
        },
        {
            value: ArticleSortFields.VIEWS,
            title: t('Просмотрам')
        },
        {
            value: ArticleSortFields.TITLE,
            title: t('Типу')
        }
    ], [t])

    const sortOptionsOrder=useMemo<sortOrderData[]>(()=>[
        {
            value: 'desc',
            title: t('Убывания')
        },
        {
            value: 'asc',
            title: t('Возрастания')
        }
    ], [t]) 

    const tabs = useMemo<string[]>(()=>[
        'ALL',
        'IT',
        'POLITICS',
        'ECONOMY'
    ], [])

    const view = localStorage.getItem(LOCAL_ARTICLES_VIEW) || ArticlesView.SMALL

    return (
        <PageWrapper className={cls.ArticlePage} onScrolledEnd={onLoadNextPart}>
            <AsyncReducerWrapper removeAfterClose={false} reducers={inputReducers}>
                <Button>+_</Button>
                <SortArticleOptions cards={tabs} defaultSearchParams={searchParams} sortFieldsOptions={sortOptions} sortOrderOptions={sortOptionsOrder}/>
                <ArticleItemList view={view as ArticlesView} />
            </AsyncReducerWrapper>
        </PageWrapper>
    )
}