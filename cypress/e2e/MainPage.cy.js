describe('multi-page navigation', () => {
  it('main links work correctly', () => {

    cy.visit('https://demo.guru99.com/test/newtours/index.php')
    cy.title().should("equal", "Welcome: Mercury Tours")

    // test SIGN-ON link
    cy.contains("a", "SIGN-ON").click();
    cy.title().should("equal", "Sign-on: Mercury Tours");

    // test REGISTER link
    cy.contains("a", "REGISTER").click()
    cy.title().should("equal", "Register: Mercury Tours")

    // test SUPPORT link
    cy.contains("a", "SUPPORT").click()
    cy.title().should("equal", "Under Construction: Mercury Tours")

    // test CONTACT link
    cy.contains("a", "CONTACT").click()
    cy.title().should("equal", "Under Construction: Mercury Tours")

  })
})