import React, { useState } from "react";
import cls from './SideBar.module.scss';
import ClassNameHelper from '../../../../shared/lib/classNames/classNames';
import { ThemeSwitcher } from "../../../../shared/ui/ThemeSwitcher/index"
import { LanguageChanger } from "../../../../shared/ui/LanguageChanger/LanguageChanger"
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme, ButtonSize } from "../../../../shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "../../../../shared/ui/AppLink/AppLink";
import AboutUsIcon from '../../../../shared/assets/icons/AboutUsIcon.svg'
import MainIcon from '../../../../shared/assets/icons/MainIcon.svg'
// import {Themes} from '../../../app/providers/ThemeProvider/ui/ThemeContext'

interface SidebarProps {
    className?: string;
}

const SideBar: React.FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation('navbar')

    const setCollapsedSideBar = () => {
        setCollapsed(collapsed => !collapsed)
    }
    return (
        <div data-testid='sidebar' className={ClassNameHelper(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <div className={cls.linkWrapper}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.item}>
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>

                    {t('Главная')}
                    </span>
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} className={cls.item}>
                    <AboutUsIcon className={cls.icon}/>
                    <span className={cls.link}>
                    {t('О нас')}
                    </span>
                </AppLink>
            </div>

            <Button
                size={ButtonSize.SIZE_XL}
                half_square={true} className={cls.collapsedBtn} theme={ButtonTheme.BACKGROUND_INVERTED}
                data-testid='sidebar-button' onClick={setCollapsedSideBar}>
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageChanger className={cls.lang} collapsed={collapsed} />
            </div>
        </div>
    )
}

export default SideBar