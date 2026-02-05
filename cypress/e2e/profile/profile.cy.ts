let profileId: string;

describe('Пользователь заходит на страницу редактирования профиля', () => {
    beforeEach(() => {
        cy.login('testuser', '223311').then((data) => {
            profileId = data.id.toString();
        });
        cy.visit(`/edit`);
    });
    afterEach(() => {
        cy.resetTestProfileData(profileId);
    });
    it('Проверка на отрисовку профиля ', () => {
        cy.getByTestId('EditProfilePage').should('exist');
        cy.getByTestId('EditCardFirstname').should('exist');
        cy.getByTestId('EditCardLastname').should('exist');
        cy.getByTestId('EditCardFirstname').should('have.value', 'Ponchik');
        cy.getByTestId('EditCardLastname').should('have.value', 'Mikro');
    });
    it('Проверка на изменение и сохранение данных ', () => {
        cy.getByTestId('EditCardFirstname').clear().type('newFirstname');
        cy.getByTestId('EditCardLastname').clear().type('newLastname');
        cy.getByTestId('EditCardChangeButton').click();
        cy.getByTestId('EditCardFirstname').should(
            'have.value',
            'newFirstname',
        );
        cy.getByTestId('EditCardLastname').should('have.value', 'newLastname');
    });
});
