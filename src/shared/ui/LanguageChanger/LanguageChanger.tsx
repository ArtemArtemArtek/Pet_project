import React from "react";
import { Button, ButtonTheme } from "../Button/Button";
import { useTranslation } from 'react-i18next';
import ClassNameHelper from "../../lib/classNames/classNames";

interface LanguageChangerProps {
    className?: string
}


export const LanguageChanger: React.FC<LanguageChangerProps> = ({ className }) => {

    const { t, i18n } = useTranslation()

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }


    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={ClassNameHelper('', {}, [className])}
            onClick={changeLanguage}>
            {t('Язык')}
        </Button>
    )
}