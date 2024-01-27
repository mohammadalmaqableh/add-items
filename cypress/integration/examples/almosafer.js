describe('test', () => {
    it.skip('test 123 cases language,contact number,currency', () => {
        cy.visit("https://www.almosafer.com/en")
        //currency check
        cy.get('[data-testid="Header__CurrencySelector"]').should('contain',"SAR")
        // conttact check
        cy.get('.sc-hUfwpO').should('contain',"966554400000")
        // contacct languge
        cy.get('[data-testid="Header__LanguageSwitch"]').should('contain',"العربية")


    })
    it.skip('the test logo of qitaf', () => {
        cy.visit("https://www.almosafer.com/en")

        cy.get('.sc-fihHvN').should('be.visible')
    });
    it.skip('check the hotle tab is not selected', () => {
        cy.visit("https://www.almosafer.com/en")
        cy.get('#uncontrolled-tab-example-tab-hotels').should('have.attr',"aria-selected").and('equal','false')

    });
    it('test check the ddepatura date and return date', () => {
        cy.visit("https://www.almosafer.com/en")

        const currenDate =new Date()
        const day = currenDate.getDay()
        const expectedForDepature= day+1
        const expectedForReturn= day+2
        cy.get('[data-testid="FlightSearchBox__FromDateButton"] > .sc-cPuPxo').should('contain',expectedForDepature)
        cy.get('[data-testid="FlightSearchBox__ToDateButton"] > .sc-cPuPxo').should('contain',expectedForReturn)
    });
    it('', () => {
        
    });
});