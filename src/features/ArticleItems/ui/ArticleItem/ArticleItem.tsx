import React from "react";
import { ArticleDetailType } from "src/entities/ArticleDetail";
import { Avatar, AvatarSize } from "../../../../shared/ui/Avatar/Avatar";
import Eye_icon from '../../../../shared/assets/icons/Eye.svg'
import cls from './ArticleItem.module.scss'
import { Button, ButtonTheme } from "../../../../shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PathRoutes } from "../../../../shared/configs/routeConfig/routeConfig";

interface ArticleItemProps {
    article: ArticleDetailType
}



export const ArticleItem: React.FC<ArticleItemProps> = (props) => {

    const { article } = props
    const { t } = useTranslation('article')
    const navigate = useNavigate()

    const redirectArticle = () => {
        navigate(PathRoutes.article_detail + article.id)
    }
    return (
        <div className={cls.article_card}>
            <div className={cls.avatar_wrapper}>

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
            <div className={cls.fade_text}>{article.blocks.find(el => el.type === 'TEXT').paragraphs}</div>
            <Button onClick={redirectArticle} className={cls.button_style} theme={ButtonTheme.CLEAR}>{t('Читать далее')}</Button>
        </div>
    )
}