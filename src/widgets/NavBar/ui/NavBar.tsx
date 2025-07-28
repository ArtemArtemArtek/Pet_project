import React from "react";
import cls from './NavBar.module.scss';
import ClassNameHelper from '../../../shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '../../../shared/ui/AppLink/AppLink'
import { useTranslation } from "react-i18next"

interface NavBarProps {
    className: string
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
    
    const {t} = useTranslation('navbar')
    return (
        <div className={ClassNameHelper(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
                    {t('Главная')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                    {t('О нас')}
                </AppLink>
            </div>
        </div>
    )
}

export default NavBar