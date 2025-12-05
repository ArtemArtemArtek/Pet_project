import React from "react"
import { useTranslation } from "react-i18next"
import { TestButton } from "../../../app/providers/ErrorBoundary/ui/TestButton"
import { useState } from "react"
import { PageWrapper } from "../../../widgets/PageWrapper/PageWrapper"
import Drawer from "../../../shared/ui/Drawer/Drawer"

export const MainPage = () => {
    const { t } = useTranslation('main')
     const [isDrawerOpen, setIsDrawerOpen] = useState(false);
     const [drawerPosition, setDrawerPosition] = useState<'left' | 'right' | 'bottom'>('bottom');

    return (
        <PageWrapper>
            {t('Главная страница')}
            <TestButton />
        </PageWrapper>
    )
}

// export default MainPage