import React, { useCallback, useEffect } from "react";
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

const inputReducers: ReducerList = {
    articles: articlesReducer
}

export const ArticlesPage: React.FC = () => {

    const dispatch = useAppDispatch()
    const inited = useSelector(getArticlesPageInited)

    const onChangeView = useCallback((view: ArticlesView) => {
        dispatch(articlesActions.setView(view));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useEffect(() => {
        if (!inited) {
            dispatch(articlesActions.initState())
            dispatch(fetchArticlesData({
                page: 1,
            }))
        }
        // eslint-disable-next-line
    }, [])

    const view = localStorage.getItem(LOCAL_ARTICLES_VIEW) || ArticlesView.SMALL
    const { t } = useTranslation()

    return (
        <PageWrapper className={cls.ArticlePage} onScrolledEnd={onLoadNextPart}>
            <AsyncReducerWrapper removeAfterClose={false} reducers={inputReducers}>
                <ArticleItemList view={view as ArticlesView} />
            </AsyncReducerWrapper>
        </PageWrapper>
    )
}