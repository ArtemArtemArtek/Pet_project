import React from "react";
import { ArticleDetailType } from "../../../../entities/ArticleDetail";
import { Avatar, AvatarSize } from "../../../../shared/ui/Avatar/Avatar";
import Eye_icon from '../../../../shared/assets/icons/Eye.svg'
import cls from './ArticleItem.module.scss'
import { Button, ButtonTheme } from "../../../../shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PathRoutes } from "../../../../shared/configs/routeConfig/routeConfig";
import { ArticlesView } from "../../model/types/articleTypes";

export enum viewArticles{
    SMALL="SMALL",
    BIG="BIG"
}

interface ArticleItemProps {
    article: ArticleDetailType
    articles_view: ArticlesView
}

export const ArticleItem: React.FC<ArticleItemProps> = (props) => {

    const { article, articles_view} = props
    const { t } = useTranslation('articles')
    const navigate = useNavigate()
    const redirectArticle = () => {
        navigate(PathRoutes.article_detail + article.id)
    }
    if(articles_view===ArticlesView.BIG){
        return(
            <div className={cls.article_big_card}>
                <div className={cls.avatar_big_wrapper}>
                <Avatar src={article.img} size={AvatarSize.MEDIUM} />
                </div>
                          <div className={cls.title}>{article.title}</div>
                        <div className={cls.sub_title}>
                <div className={cls.types_wrapper}>{article.type.map((el) => (<div className={cls.type_item}>{el}</div>))}</div>
                <div className={cls.views}>
                    <p>{article.views}</p>
                    <Eye_icon />
                </div>
            </div>
                <div className={cls.fade_text}>{
                //@ts-ignore
                article.blocks.find(el => el.type === 'TEXT').paragraphs}</div>
            <Button onClick={redirectArticle} className={cls.button_big_style} theme={ButtonTheme.CLEAR}>{t('Читать далее')}</Button>
            </div>
        )
    }

    return (
        <div className={cls.article_card}>
            <div className={cls.avatar_wrapper}>

                <Avatar src={article.img} size={AvatarSize.MEDIUM} />
            </div>
            <div className={cls.title}>{article.title}</div>
            <div className={cls.sub_title}>
                <div className={cls.types_wrapper}>{article.type.map((el) => (<div key={el} className={cls.type_item}>{el}</div>))}</div>
                <div className={cls.views}>
                    <p>{article.views}</p>
                    <Eye_icon />
                </div>
            </div>
            <div className={cls.fade_text}>{
            //@ts-ignore
            article.blocks.find(el => el.type === 'TEXT').paragraphs}</div>
            <Button onClick={redirectArticle} className={cls.button_style} theme={ButtonTheme.CLEAR}>{t('Читать далее')}</Button>
        </div>
    )
}