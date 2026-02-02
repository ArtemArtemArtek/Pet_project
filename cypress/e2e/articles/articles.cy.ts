describe('Пользователь заходит на страницу статей', () => {
  beforeEach(() => {
    cy.login('testuser', '223311').then((data)=>{
      cy.intercept('GET', '**/articles?*', {fixture: "articles.json"})
        cy.visit(`/articles`)
    })
    cy.getByTestId('ArticlesPage').should('exist')
  })
  it('Проверка на отрисовку страницы', () => {
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
    cy.getByTestId('ArticleListItem').should('have.css', 'width', '400px')
  })
  it.skip('Проверка на переключение режима отображения', () => {
    cy.getByTestId('ArticleItemChangeViewButton').click()
    cy.getByTestId('ArticleListItem').should('have.css', 'min-width', '500px')
  })
  it.skip('Проверка поисковой строки', () => {
    let searchText = 'Golang'
    cy.wait(2000)
    cy.getByTestId('ArrticlesSearchInput').clear().type(searchText)
    cy.getByTestId('ArticleListItem').should('exist')
    cy.wait(2000)
    cy.getByTestId('ArticleItemReadmoreButton').click()
    cy.getByTestId('ArticleDetailPage').should('exist')
    cy.getByTestId('ArticleDetailSubtitle').should('contain.text', searchText)
  })
  it.skip('Проверка кнопки POLITICS', () => {
    cy.wait(2000)
    cy.getByTestId('POLITICS').should('exist')
    cy.getByTestId('POLITICS').click()
    cy.wait(2000)
    cy.getByTestId('ArticleItemTypePOLITICS').should('exist')
  })
})