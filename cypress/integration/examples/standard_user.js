describe("this is a test for login in standard user",()=>{

    it("test the login when the user name and the password are correct",()=>{
cy.visit("https://www.saucedemo.com")
cy.get('[data-test="username"]').type("standard_user")
cy.get('[data-test="password"]').type("secret_sauce")
cy.get('[data-test="login-button"]').click()



    })
    it('to add all items to the cart', () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        let expectedItems=6;
       for(let i =0;i<expectedItems;i++){
        let myArrat = cy.get('div#inventory_container').find('.btn').eq(i).click()
        

       }
    });
})