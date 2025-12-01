import React from "react"
import { useTranslation } from "react-i18next"
import { TestButton } from "../../../app/providers/ErrorBoundary/ui/TestButton"
import { useState } from "react"
import { PageWrapper } from "../../../widgets/PageWrapper/PageWrapper"
import { ListBox } from "../../../shared/ui/ListBox/ListBox"
import { Dropdown } from "../../../shared/ui/Menu/Dropdown"
import { Notifications } from "../../../shared/ui/Notifications"
import NotificationsIcon from '../../../shared/assets/icons/NotificationsIcon.svg'
import { NotificationItemData } from "../../../shared/ui/Notifications/NotificationItem/NotificationItem"

export const MainPage = () => {
    const { t } = useTranslation('main')

    const exampleItems: NotificationItemData[] = [
        {
            text: '1text',
            title: 'Title1',
            href: '/profile',
            avatar: 'https://papik.pro/uploads/posts/2023-02/1676117425_papik-pro-p-risunki-hd-1.jpg'

        },
        {
            text: '2text',
            title: 'Title1',
            href: '/about',
            avatar: 'https://photofile.ru/wp-content/uploads/2024/04/1684700436047.png'
        },
        {
            text: '3text',
            title: 'Title1',
            // href: '/main'
        },
    ]

    return (
        <PageWrapper>
            {t('Главная страница')}
            <TestButton />
            <Notifications trigger={<NotificationsIcon/>} menuItems={exampleItems } />
        </PageWrapper>
    )
}

// export default MainPage