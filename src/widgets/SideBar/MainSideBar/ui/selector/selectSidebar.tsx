import React from 'react';
import { useSelector } from 'react-redux';
import {
    getAboutPath,
    getProfilePath,
    getMainPath,
    getArticlesPath,
} from '../../../../../shared/configs/routeConfig/routeConfig';
import { getUser } from '../../../../../entities/User';
import AboutUsIcon from '../../../../../shared/assets/icons/AboutUsIcon.svg';
import MainIcon from '../../../../../shared/assets/icons/MainIcon.svg';
import ProfileIcon from '../../../../../shared/assets/icons/ProfileIcon.svg';
import ArticlesIcon from '../../../../../shared/assets/icons/ArticlesIcon.svg';
import { useTranslation } from 'react-i18next';
export interface ListProps {
    path: string;
    text: string;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    isauth?: boolean;
}

export const selectSidebarItem = () => {
    const userData = useSelector(getUser);
    const { t } = useTranslation();

    return [
        {
            text: t('Главная'),
            path: getMainPath(),
            icon: MainIcon,
        },
        {
            text: t('О нас'),
            path: getAboutPath(),
            icon: AboutUsIcon,
        },
        {
            text: t('Профиль'),
            path: getProfilePath(userData?.isAuth?.id),
            icon: ProfileIcon,
            isauth: true,
        },
        {
            text: t('Статьи'),
            path: getArticlesPath(),
            icon: ArticlesIcon,
            isauth: true,
        },
    ];
};
