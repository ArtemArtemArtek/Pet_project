import React, { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next';
import i18n from "../../configs/i18n/i18nTestConfig";
import { render } from '@testing-library/react';

export const i18nHelper = (component: ReactNode) => {
    return (render(
        <I18nextProvider i18n={i18n}>
            {component}
        </I18nextProvider>
    )
    )
}