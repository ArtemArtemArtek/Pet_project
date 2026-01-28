import { findByDataTestId } from "../../support/helpers/findByDataTestId"

describe('Тест роутинга приложения', () => {
  describe('Пользователь не авторизован', () => {
    it('Переход на Main page', () => {
      cy.visit('/')
      cy.get(findByDataTestId('MainPageTest')).should('exist')
    })
    it('Переход на несуществующую страницу', () => {
      cy.visit('/dsgdfggdgdfdf')
      cy.get(findByDataTestId('NotFoundPage')).should('exist')
    })
    it('Переход на страницу профиля', () => {
      cy.visit('/profile/1')
      cy.get(findByDataTestId('MainPageTest')).should('exist')
    })
  })
  describe('Пользователь авторизован', () => {
    it('Переход на страницу профиля', () => {
      cy.login('admin', '123')
      cy.visit('/profile/1')
      cy.get(findByDataTestId('ProfilePage')).should('exist')
    })
    // it('Переход на страницу статей', () => {
    //   cy.login('testuser', '223311')
    //   cy.visit('/articles')
    //   cy.get(findByDataTestId('ArticlesPage')).should('exist')
    // })
  })
})