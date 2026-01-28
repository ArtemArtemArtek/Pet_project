Cypress.Commands.add('login',  (username: string, password: string) => {
      cy.request({
        method: 'POST',
        url: `http://localhost:8000/login`,
        body: {
          username,
          password,
        },
      }).then(({ body }) => {
      window.localStorage.setItem('user', JSON.stringify(body))
    //   window.localStorage.setItem('auth', 'true')
      }) 
  })

declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>
    }
  }
}

export{}