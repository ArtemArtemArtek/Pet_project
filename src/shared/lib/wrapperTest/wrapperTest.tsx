import { MemoryRouter } from "react-router-dom";
import React, { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next';
import i18n from "../../configs/i18n/i18nTestConfig";
import { render } from '@testing-library/react';
import { StateSchema } from "../../../app/providers/StoreProvider/types/types";
import { StoreProvider } from "../../../app/providers/StoreProvider/ui/StoreProvider";
import { DeepPartial } from "../../../app/providers/StoreProvider/types/types";

interface wrapperTestProps{
    store?: DeepPartial<StateSchema>
}

export const wrapperTest = (component: ReactNode, options:wrapperTestProps={store:{auth:{username:'admin', password:'123', error:'', isLoading:false}}}  ) => {
    
    const { store} = options

    return (render(
        <StoreProvider initialState={store as StateSchema}>        
            <MemoryRouter >
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
    )
};

