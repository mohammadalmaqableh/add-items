describe('this is to the alert boxes', () => {
    it.skip('this is to the normal alert', () => {
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        
       cy.get('#OKTab > .btn').click()
        cy.on('window:alert',(theMsg)=>{
            cy.log(theMsg)
            expect(theMsg).to.eql("Hello , share this practice page who love to learn automation")
        })

        })
        it.skip('this is to test the prompt msg', () => {
            cy.visit("https://demo.automationtesting.in/Alerts.html")
            cy.window().then((win)=>{

                cy.stub(win,'prompt').returns("mohammad maqableh")
            })

            cy.get('#Textbox > .btn')
        });
        it.skip('handel confirm msg', () => {
           /* cy.visit("https://codenboxautomationlab.com/practice/")
            cy.get('#name').type("tyugughhn")
            cy.on("window:confirm",(question)=>{
                return true
            })
            cy.get('#confirmbtn').click()
        */     });
        it('Checkbox Example', () => {
            cy.visit("https://codenboxautomationlab.com/practice/")
            //single check for one
           // cy.get("#checkBoxOption1").check()
           //multiple
          //  cy.get("input[type='checkbox']").check(["option1","option3"])
          //radio butten
          //cy.get('#radio-btn-example').find("input[type='radio']").eq(0).check()
          //على اخيارات
          cy.get("#dropdown-class-example").select("API")
          //dynamic 
          cy.get('#autocomplete').type("HU").then((el,index,list)=>{})








        });

    });
