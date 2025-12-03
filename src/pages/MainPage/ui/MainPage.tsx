import React from "react"
import { useTranslation } from "react-i18next"
import { TestButton } from "../../../app/providers/ErrorBoundary/ui/TestButton"
import { useState } from "react"
import { PageWrapper } from "../../../widgets/PageWrapper/PageWrapper"
import { ListBox } from "../../../shared/ui/ListBox/ListBox"
import { Dropdown } from "../../../shared/ui/Menu/Dropdown"
import { Notifications } from "../../../features/Notifications"
import NotificationsIcon from '../../../shared/assets/icons/NotificationsIcon.svg'
import { NotificationItemData } from "../../../features/Notifications/ui/NotificationItem/NotificationItem"

export const MainPage = () => {
    const { t } = useTranslation('main')

    return (
        <PageWrapper>
            {t('Главная страница')}
            <TestButton />
        </PageWrapper>
    )
}

// export default MainPage