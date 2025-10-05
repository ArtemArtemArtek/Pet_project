import React from "react";
import cls from './ArticleDetailPage.module.scss'
import { ArticleDetail } from "../../../entities/ArticleDetail";
import { AsyncReducerWrapper, ReducerList } from "../../../shared/lib/asyncReducerWrapper/asyncReducerWrapper";
import { articleDetailReducer } from "../../../entities/ArticleDetail/model/slice/ArticleDetailSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../../../app/providers/StoreProvider/config/store";
import { fetchArticleDetail } from "../../../entities/ArticleDetail/model/service/getArticleDetail";

const inputReducers: ReducerList = {
    article_detail: articleDetailReducer
}

export const ArticleDetailPage: React.FC = React.memo(() => {
    const dispatch = useAppDispatch()
    
    useEffect(()=>{
        dispatch(fetchArticleDetail(1))
    },[dispatch])

    return (
        <div className={cls.ArticleDetailPage}>
            <AsyncReducerWrapper reducers={inputReducers} removeAfterClose>
                <ArticleDetail />
            </AsyncReducerWrapper>
        </div>
    )
})