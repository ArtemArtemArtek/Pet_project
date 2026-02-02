let articleID=''

describe('Пользователь переходит на страницу статьи', () => {
  beforeEach(() => {
    cy.login('testuser', '223311')
    cy.createArticle().then((data)=>{
      articleID=data.id
      cy.visit(`articles/${data.id}`)
    })
  })
  afterEach(()=>{
    cy.deleteArticle(articleID)
  })
  it('Проверка на отрисовку страницы', () => {
    cy.getByTestId('ArticleDetailPage').should('exist')
  })
  it('Проверка на отрисовку страницы(на фикстурах)', () => {
    cy.intercept('GET', '**/article/*', {fixture: 'article_detail.json'})
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