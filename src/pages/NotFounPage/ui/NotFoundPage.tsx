import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import ClassNameHelper from "../../../shared/lib/classNames/classNames";
import cls from "./NotFoundPage.module.scss"
import { PageWrapper } from "../../../widgets/PageWrapper/PageWrapper";
import { Loader } from "../../../shared/ui/Loader/Loader";

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = () => {
    const { t } = useTranslation()

    return (
        <PageWrapper className={ClassNameHelper(cls.maintext, {}, [])}>
            <h1>{t('Извините')}</h1>
            <h1>{t('Страница не найдена')}</h1>
            {/* <Loader/> */}
        </PageWrapper>
    )
}