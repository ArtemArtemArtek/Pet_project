import React from "react"
import { useTranslation } from "react-i18next"
import { TestButton } from "../../../app/providers/ErrorBoundary/ui/TestButton"

export const MainPage = () => {
    const {t} = useTranslation('main')
    return (
        <div>
            {t('Главная страница')}
            <TestButton/>
        </div>
    )
}

// export default MainPage