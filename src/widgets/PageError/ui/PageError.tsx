import React from 'react';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

export const PageError: React.FC = () => {
    const { t } = useTranslation();

    const ReloadPage = () => {
        location.reload();
    };

    return (
        <div className={cls.pageErrorWrapper}>
            <h1>{t('Ошибка')}</h1>
            <button onClick={ReloadPage}>{t('Перезагрузить страницу')}</button>
        </div>
    );
};
