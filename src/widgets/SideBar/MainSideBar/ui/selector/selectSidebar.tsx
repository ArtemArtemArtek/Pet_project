import React from "react";
import { useSelector } from "react-redux";
import { PathRoutes } from "../../../../../shared/configs/routeConfig/routeConfig";
import { getUser } from "../../../../../entities/User";
import AboutUsIcon from '../../../../../shared/assets/icons/AboutUsIcon.svg'
import MainIcon from '../../../../../shared/assets/icons/MainIcon.svg'
import ProfileIcon from '../../../../../shared/assets/icons/ProfileIcon.svg'
import ArticlesIcon from '../../../../../shared/assets/icons/ArticlesIcon.svg'
import { useTranslation } from "react-i18next";
export interface ListProps {
    path: string
    text: string
    icon: React.VFC<React.SVGProps<SVGSVGElement>>
    isauth?: boolean
}


export const selectSidebarItem=()=>{
    const userData = useSelector(getUser)
    const {t} = useTranslation()

    return [
    {
        text: t('Главная'),
        path: PathRoutes.main,
        icon: MainIcon,
    },
    {
        text: t('О нас'),
        path: PathRoutes.about,
        icon: AboutUsIcon,
    },
    {
        text: t('Профиль'),
        path: PathRoutes.profile+userData?.isAuth?.id,
        icon: ProfileIcon,
        isauth: true
    },
    {
        text: t('Статьи'),
        path: PathRoutes.articles,
        icon: ArticlesIcon,
        isauth: true
    }
]
}