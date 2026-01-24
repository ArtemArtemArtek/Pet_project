import React from "react"
import { useTranslation } from "react-i18next"
import { Counter } from "../../../features/Counter/index"
import { PageWrapper } from "../../../widgets/PageWrapper/PageWrapper"

export const AboutPage = () => {
    const {t} = useTranslation('about')
    return (
        <PageWrapper data-testid="AboutPage">
            {t('О нас')}
            <Counter/>
        </PageWrapper>
    )
}

// export default AboutPage