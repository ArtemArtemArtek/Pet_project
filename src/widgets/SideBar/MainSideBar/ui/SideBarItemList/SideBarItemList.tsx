import React from "react";
import { PathRoutes } from "../../../../../shared/configs/routeConfig/routeConfig";
import AboutUsIcon from '../../../../../shared/assets/icons/AboutUsIcon.svg'
import MainIcon from '../../../../../shared/assets/icons/MainIcon.svg'
import ProfileIcon from '../../../../../shared/assets/icons/ProfileIcon.svg'
import ArticlesIcon from '../../../../../shared/assets/icons/ArticlesIcon.svg'

export interface ListProps {
    path: string
    text: string
    icon: React.VFC<React.SVGProps<SVGSVGElement>>
    isauth?: boolean
}

export const SideBarItemList: Array<ListProps> = [
    {
        text: 'Главная',
        path: PathRoutes.main,
        icon: MainIcon,
    },
    {
        text: 'О нас',
        path: PathRoutes.about,
        icon: AboutUsIcon,
    },
    {
        text: 'Профиль',
        path: PathRoutes.profile,
        icon: ProfileIcon,
        isauth: true
    },
    {
        text: 'Статьи',
        path: PathRoutes.articles,
        icon: ArticlesIcon,
        isauth: true
    }
]