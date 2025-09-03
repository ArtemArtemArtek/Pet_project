import { MemoryRouter } from "react-router-dom";
import React, { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next';
import i18n from "../../configs/i18n/i18nTestConfig";
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import { StateSchema } from "../../../app/providers/StoreProvider/types/types";
import { StoreProvider } from "../../../app/providers/StoreProvider/ui/StoreProvider";

interface wrapperTestProps{
    store?: StateSchema
}

export const wrapperTest = (component: ReactNode, options:wrapperTestProps={} ) => {
    
    const { store} = options

    return (render(
        <StoreProvider initialState={store}>        
            <MemoryRouter >
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
    )
};

