import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import ClassNameHelper from "../../../shared/lib/classNames/classNames";
import cls from "./NotFoundPage.module.scss"
import { Loader } from "../../../shared/ui/Loader/Loader";

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={ClassNameHelper(cls.maintext, {}, [className])}>
            <h1>{t('Извините')}</h1>
            <h1>{t('Страница не найдена')}</h1>
            {/* <Loader/> */}
        </div>
    )
}