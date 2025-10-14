import React from "react";
import { AppLink, AppLinkTheme } from "../../../../../shared/ui/AppLink/AppLink";
import { ListProps } from "../SideBarItemList/SideBarItemList";
import { useTranslation } from "react-i18next"
import ClassNameHelper from "../../../../../shared/lib/classNames/classNames";
import cls from './SideBarItem.module.scss'
import { useSelector } from "react-redux";
import { getUser } from "../../../../../entities/User";

interface SideBarItemProps {
    itemData: ListProps
    collapsed: boolean
}

export const SideBarItem: React.FC<SideBarItemProps> = React.memo((props) => {

    const { t } = useTranslation('sidebar')
    const authData = useSelector(getUser)
    let altPath=''

    if(props.itemData.path=='/profile/'){
        altPath = `/profile/${authData.isAuth.id}`
    }

    return (
        <AppLink theme={AppLinkTheme.SECONDARY} to={altPath?altPath:props.itemData.path} className={ClassNameHelper(cls.link, { [cls.collapsed]: props.collapsed }, [])}>
            <props.itemData.icon className={cls.icon} />
            <span className={cls.link}>
                {t(props.itemData.text)}
            </span>
        </AppLink>
    )
})