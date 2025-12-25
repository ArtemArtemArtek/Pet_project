import React from "react"
import { useTranslation } from "react-i18next"
import { TestButton } from "../../../app/providers/ErrorBoundary/ui/TestButton"
import { PageWrapper } from "../../../widgets/PageWrapper/PageWrapper"
import { Rating } from "../../../features/Rating"

export const MainPage = () => {
    const { t } = useTranslation('main')

    const testfunc=(star: number)=>{
        console.log(star)
    }

    return (
        <PageWrapper>
            {t('Главная страница')}
            <TestButton />
            <Rating title="Выберите рейтинг" hasFeedback onSelectStar={testfunc}/>
        </PageWrapper>
    )
}