import React from "react";
import { useEffect } from "react";
import { useAppDispatch } from "../../../../app/providers/StoreProvider/config/store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { fetchArticleDetail } from "../../model/service/getArticleDetail";
import { getArticleDetailData } from "../../model/selectors/getArticleData";
import { AsyncReducerWrapper, ReducerList } from "../../../../shared/lib/asyncReducerWrapper/asyncReducerWrapper";
import { articleDetailReducer } from "../../model/slice/ArticleDetailSlice";
import { StateSchema } from "../../../../app/providers/StoreProvider";

export const ArticleDetail:React.FC=React.memo(()=>{
    const dispatch = useAppDispatch()
    const articleData = useSelector((state:StateSchema)=>state.article_detail)

    console.log(articleData?.data?.img)
    
    if(articleData?.isLoading){
        console.log('GHN:BDSJULKIEGF<LGFGKSDFGSUEGFUYSJGFDKGFYGYSEF<SGF<KUSGFKES<YFG<ESHYGFKEUYGF<SHEJYGDF<JESGFEGFUES')
        return(
            <div>Loading.......</div>
        )
    }
    return(
        articleData?.isLoading?<div>ЗАГРУЗКА СТРАНИЦЫ</div>:
        <div>
            Article Detail Component
        </div>
    )
})