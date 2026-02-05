describe('Тест роутинга приложения', () => {
    describe('Пользователь не авторизован', () => {
        it('Переход на Main page', () => {
            cy.visit('/');
            cy.getByTestId('MainPageTest').should('exist');
        });
        it('Переход на несуществующую страницу', () => {
            cy.visit('/dsgdfggdgdfdf');
            cy.getByTestId('NotFoundPage').should('exist');
        });
        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.getByTestId('MainPageTest').should('exist');
        });
    });
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login('testuser', '223311');
        });
        it('Переход на страницу профиля', () => {
            cy.visit('/profile/4');
            cy.getByTestId('ProfilePage').should('exist');
        });
        it('Переход на страницу статей', () => {
            cy.visit('/articles');
            cy.getByTestId('ArticlesPage').should('exist');
        });
    });
});
