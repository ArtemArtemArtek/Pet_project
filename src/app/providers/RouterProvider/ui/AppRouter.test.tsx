import { describe, expect, test } from '@jest/globals';
import AppRouter from './AppRouter';
import { wrapperTest } from '../../../../shared/lib/wrapperTest/wrapperTest';
import { getAboutPath,  getAdminPagePath} from '../../../../shared/configs/routeConfig/routeConfig';
// import { screen, waitFor, render } from '@testing-library/react';
import type { UserRoles } from '../../../../entities/User';
import { render, screen } from '@testing-library/react';
import { debug } from 'console';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../../../pages/AboutPage', () => ({
    AboutPage: () => <div data-testid="AboutPage">About Page</div>
}))

jest.mock('../../../../pages/NotFounPage', () => ({
    NotFoundPage: () => <div data-testid="NotFoundPage">Not Found Page</div>
}))

jest.mock('../../../../pages/MainPage', () => ({
    MainPage: () => <div data-testid="MainPage">Main Page</div>
}))

describe('AppRouter test', () => {
    test('Default route', async () => {
        wrapperTest(<AppRouter />, { route: getAboutPath() })
        
        const page = await screen.findByTestId('AboutPage')
        expect(page).toBeInTheDocument()
    }),
    test('Not found page', async () => {
        wrapperTest(<AppRouter />, { route: '/fddsfadshljdlfs' })
        
        const page = await screen.findByTestId('NotFoundPage')
        expect(page).toBeInTheDocument()
    }),
    test('Forbiden page', async () => {
        wrapperTest(<AppRouter />, { route: getAdminPagePath(), store:{user:{isAuth:{role: 'USER'}}} })
        
        const page = await screen.findByTestId('MainPage')
        expect(page).toBeInTheDocument()
    })
})