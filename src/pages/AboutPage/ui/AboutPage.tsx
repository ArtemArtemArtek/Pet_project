import React from "react"
import { useTranslation } from "react-i18next"
import { Counter } from "../../../features/Counter/index"

export const AboutPage = () => {
    const {t} = useTranslation('about')
    return (
        <div>
            {t('О нас')}
            <Counter/>
        </div>
    )
}

// export default AboutPage