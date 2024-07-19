describe("flight finder", () => {

    // this will be executed before each test
    beforeEach(() => {
        cy.visit("https://demo.guru99.com/test/newtours/index.php")
    })

    it("flight finder works correctly", () => {

        // starting test in home page
        cy.title().should("equal", "Welcome: Mercury Tours")

        // click the flights link
        cy.contains("a", "Flights").click()
        cy.title().should("equal", "Find a Flight: Mercury Tours:")

        // trip type
        cy.get("[name='tripType'][value='oneway']").check()

        // passengers
        cy.get("[name='passCount']").select("2")

        // departure location
        cy.get("[name='fromPort']").select("Frankfurt")

        // departure date
        cy.get("[name='fromMonth']").select("September")
        cy.get("[name='fromDay']").select("23")

        // arrival location
        cy.get("[name='toPort']").select("Seattle")

        // arrival date
        cy.get("[name='toMonth']").select("October")
        cy.get("[name='toDay']").select("18")

        // service class
        cy.get("[name='servClass'][value='Business']").check()

        // airline
        cy.get("[name='airline']").select("Unified Airlines")

        // press continue (findFlights)
        cy.get("[name='findFlights']").click()

        // check flights results
        cy.contains(/No Seats Avaialble/i).should("be.visible") // there is a typo: should be "available"

        // go back to home page
        cy.get("a[href='index.php'] > img").click() // find the anchor which have an image nested inside
        cy.title().should("equal", "Welcome: Mercury Tours")

    })
})