describe('our first test', () => {
    it('print the price of each item that has one price wiithout dollar sign', () => {
        cy.visit("https://automationteststore.com/")

         //cy.get('a[href*="product/category&path"]').contains("Hair Care").click()
         //cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as("firstitemtext")

         //cy.get("@firstitemtext").should('include','Pantene ')
         //cy.get("@firstitemtext").its('length').should('be.greaterThan',3)

            
         //to bring the item itself so i can the price out of it
         //cy.get('.thumbnail').as("Items")
         //cy.get('@Items').find('.oneprice').each((element,index,list)=>{
          //  cy.log("the"+element.text()+"is located at index #"+index)
         //})

         //to print the items without the dollar sign $$$
                  cy.get('.thumbnail').as("Items")
                  cy.get('@Items').find('.oneprice').invoke('text').as("itemsprice")
                  cy.get('@itemsprice').then((pricetext)=>{
                   let myListOfprices= pricetext.split("$")
                   let total=0
                   for(let i=0;i<myListOfprices.lenght;i++){
                    cy.log(myListOfprices[i])
                   }


                  })



         













        
    });
    
});