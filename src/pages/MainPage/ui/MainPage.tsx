import React from "react"
import { useTranslation } from "react-i18next"
import { TestButton } from "../../../app/providers/ErrorBoundary/ui/TestButton"
import { useState } from "react"
import { PageWrapper } from "../../../shared/ui/PageWrapper/PageWrapper"

export const MainPage = () => {
    const {t} = useTranslation('main')

    return (
        <PageWrapper>
            {t('Главная страница')}
            <TestButton/>
        </PageWrapper>
    )
}

// export default MainPage