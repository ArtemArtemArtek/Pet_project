import { user } from '../types/profileTypes';

export const login = (username: string, password: string) => {
    cy.request({
        method: 'POST',
        url: `http://localhost:8000/login`,
        body: {
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem('user', JSON.stringify(body));
        return body;
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            login(username: string, password: string): Chainable<user>;
        }
    }
}
