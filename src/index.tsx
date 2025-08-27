import { render } from 'react-dom'
import React from 'react';
import App from './app/App'
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider'
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import "./shared/configs/i18n/i18n";
import { store } from './app/providers/StoreProvider/config/store';
import { Provider } from 'react-redux';

render(
    <Provider store={store}>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)