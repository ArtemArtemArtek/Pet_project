describe('Пользователь переходит на страницу статьи', () => {
  beforeEach(() => {
    cy.login('testuser', '223311').then((data)=>{
        cy.visit(`/articles/13`)
    })
  })
  it('Проверка на отрисовку страницы', () => {
    cy.getByTestId('ArticleDetailPage').should('exist')
  })
  it('Проверка на отправку комментария', () => {
    let comment = 'Хорошая статья'
    cy.getByTestId('CommentInputField').scrollIntoView()
    cy.getByTestId('CommentInputField').type(comment)
    cy.getByTestId('SendCommentButton').click()
    cy.getByTestId('CommentOnArticlePage').should('exist')
    cy.getByTestId('CommentOnArticlePage').should('contain.text', comment)
  })
})