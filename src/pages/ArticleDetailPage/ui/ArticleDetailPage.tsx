import React from "react";
import cls from './ArticleDetailPage.module.scss'
import { ArticleDetail } from "../../../entities/ArticleDetail";
import { AsyncReducerWrapper, ReducerList } from "../../../shared/lib/asyncReducerWrapper/asyncReducerWrapper";
import { articleDetailReducer } from "../../../entities/ArticleDetail/model/slice/ArticleDetailSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../../../app/providers/StoreProvider/config/store";
import { fetchArticleDetail } from "../../../entities/ArticleDetail/model/service/getArticleDetail";
import { commentReducer } from "../../../entities/CommentData/model/slice/commentDataSlice";
import { fetchCommentsData } from "../../../entities/CommentData/model/service/fetchCommentsService";
import { useParams } from "react-router-dom";
import { recomendationReducer } from "../../../entities/ArticleDetail";

const inputReducers: ReducerList = {
    article_detail: articleDetailReducer,
    comments: commentReducer,
    recomendation: recomendationReducer
}

export const ArticleDetailPage: React.FC = React.memo(() => {
    const dispatch = useAppDispatch()

    // const comments = useSelector(commentSelectors.selectAll)
    const {id} = useParams()

    useEffect(()=>{
        //@ts-ignore
        dispatch(fetchArticleDetail(Number(id)))
        //@ts-ignore
        dispatch(fetchCommentsData(id))
        // dispatch(fetchRecomendationData('IT'))
    },[dispatch, id])

    return (
        <div className={cls.ArticleDetailPage}>
            <AsyncReducerWrapper reducers={inputReducers} removeAfterClose>
                <ArticleDetail />
            </AsyncReducerWrapper>
        </div>
    )
})