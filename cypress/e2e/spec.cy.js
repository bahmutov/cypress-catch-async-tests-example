import 'cypress-catch-async-tests'

it('sync callback', () => {
  cy.wrap(42).should('equal', 42)
})

// https://github.com/cypress-io/cypress/issues/4742
function getBar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('bar')
    }, 1000)
  })
}

it('async callback', async () => {
  cy.contains(await getBar())
})
