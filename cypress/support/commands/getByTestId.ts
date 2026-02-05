import { findByDataTestId } from '../helpers/findByDataTestId';

export const getByTestId = (dataTestId: string) => {
    return cy.get(findByDataTestId(dataTestId));
};
declare global {
    namespace Cypress {
        interface Chainable {
            getByTestId(dataTestId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}
