import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { universalStore } from '../config/store';
import { StateSchema } from '../types/types';
// import partia

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    const store = universalStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
