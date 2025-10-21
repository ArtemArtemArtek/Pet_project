import React from "react"
import { useTranslation } from "react-i18next"
import { Counter } from "../../../features/Counter/index"
import { PageWrapper } from "../../../shared/ui/PageWrapper/PageWrapper"

export const AboutPage = () => {
    const {t} = useTranslation('about')
    return (
        <PageWrapper>
            {t('О нас')}
            <Counter/>
        </PageWrapper>
    )
}

// export default AboutPage