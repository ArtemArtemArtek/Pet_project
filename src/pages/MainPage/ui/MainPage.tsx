import React from "react"
import { useTranslation } from "react-i18next"
import { TestButton } from "../../../app/providers/ErrorBoundary/ui/TestButton"
import { PageWrapper } from "../../../widgets/PageWrapper/PageWrapper"

export const MainPage = () => {
    const { t } = useTranslation('main')

    const testfunc = (star: number) => {
        console.log(star)
    }

    return (
            <PageWrapper data-testid='MainPageTest'>
                {t('Главная страница')}
                <TestButton />
            </PageWrapper>
    )
}