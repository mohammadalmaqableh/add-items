describe('test css selctor', () => {
    it('test1', () => {
        cy.visit("https://automationteststore.com/")
    //     cy.get("a[href='https://automationteststore.com/index.php?rt=content/contact']").click()
    //     cy.get("#ContactUsFrm_first_name").type("mohammad")
    //     cy.get("#ContactUsFrm_email").type("mohamaad0980@gmail.com")
    //     cy.get("#ContactUsFrm_enquiry").type("this a test")
    //     cy.get('button[title="Submit"]').click()

    // });
    // it.only('test 2', () => {
    //     cy.visit("https://automationteststore.com/")
    //     cy.get("a[href='https://automationteststore.com/index.php?rt=content/contact']").click()
    //     cy.get("#ContactUsFrm_first_name").type("mohammad")
    //     cy.get("#ContactUsFrm_email").type("mohamaad0980@gmail.com")
    //     cy.get("#ContactUsFrm_enquiry").type("this a test")
    //     cy.get('button[title="Submit"]').click()
    //     cy.get('.mb40 > :nth-child(3)').should('have.text',"Your enquiry has been successfully sent to the store owner!")
    //     //cy.get("a[title='Continue']").should('have.property','title')
        // cy.title().should('include',"Us")
        // cy.title().should('eq',"Contact Us")
        // cy.location('href').should("include","contact")
        // cy.url().should('include',"contact")
        //promise
        cy.get('.prdocutname').contains('Benefit Bella Bamba').click().then(function(element){
            console.log(element.text()+"has been added")
        })
        console.log("items has been add")









    });
});