describe("user registration", () => {

    // this will be executed before each test
    beforeEach(() => {
        cy.visit("https://demo.guru99.com/test/newtours/index.php")
    })

    it("user registration and sign-in works correctly", () => {

        // starting test in home page
        cy.title().should("equal", "Welcome: Mercury Tours")

        // click the REGISTER link
        cy.contains("a", "REGISTER").click()

        const firstName = "Victor"
        const lastName = "Reyes"
        const userName = "reyesvictor1"
        const phone = "1234567890"
        const email = "fake.email@gmail.com"
        const address = "Fake Street"
        const city = "Aguascalientes City"
        const state = "Aguascalientes"
        const postalCode = "20270"
        const country = "MEXICO"
        const password = "12345"

        // fill out the form
        cy.get("[name='firstName']").type(firstName)
        cy.get("[name='lastName']").type(lastName)
        cy.get("[name='phone']").type(phone)
        cy.get("[name='userName']").type(email) // attribute name is userName, should be email
        cy.get("[name='address1']").type(address)
        cy.get("[name='city']").type(city)
        cy.get("[name='state']").type(state)
        cy.get("[name='postalCode']").type(postalCode)
        cy.get("[name='country']").select(country)
        cy.get("[name='email']").type(userName) // attribute name is email, should be userName
        cy.get("[name='password']").type(password)
        cy.get("[name='confirmPassword']").type(password)

        // submit the form
        cy.get("[name='submit']").click()

        // check registration confirmation
        cy.title().should("equal", "Register: Mercury Tours")
        cy.contains(`Dear ${firstName} ${lastName}`)
        cy.contains(`Your user name is ${userName}`)

        // sign-in
        cy.contains("a", "sign-in").click()
        cy.title().should("equal", "Sign-on: Mercury Tours")
        cy.get("[name='userName'").type(userName)
        cy.get("[name='password'").type(password)
        cy.get("[name='submit'").click()
        cy.title().should("equal", "Login: Mercury Tours")
        cy.contains("Login Successfully").should("be.visible")

    })
})