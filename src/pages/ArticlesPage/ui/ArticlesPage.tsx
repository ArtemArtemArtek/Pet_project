import React from "react";
import cls from './ArticlesPage.module.scss'
import { useTranslation } from "react-i18next";

export const ArticlesPage:React.FC=()=>{

    const {t}=useTranslation()

    return(
        <div className={cls.ArticlePage}>
            {t('ArticlePage')}
        </div>
    )
}