import React from "react";
import { ArticlesView } from "../../../features/ArticleItems/model/types/articleTypes";
import { ArticleSortFields } from "../../../entities/ArticleDetail/model/types/ArticleDetailTypes";
import { ArticleItem } from "../../../features/ArticleItems/ui/ArticleItem/ArticleItem";
import { useGetRecomendations } from "../model/service/fetchRecomendations";
import { useTranslation } from "react-i18next";
import cls from './Recomendations.module.scss'

interface RecomendationsProps{
    articleType: string
}

export const Recomendations:React.FC<RecomendationsProps>=(props)=>{
    
    const {articleType} = props
    const { t } = useTranslation()
        
    const {
        isLoading,
        data
    } = useGetRecomendations({limit:3, order:'asc', sort:ArticleSortFields.VIEWS, type:articleType})

    if(isLoading){
        return(
            <div>Loading...</div>
        )
    }
    
    return(
            <div>
                <div className={cls.coment_title}>{t('Рекомендуем')}</div>
                <div className={cls.recomendations}>
                {data.map((el)=>{
                    return (
                        <ArticleItem articles_view={ArticlesView.SMALL} article={el}/>   
                    )
                })}
                </div>
            </div>
    )
}