
describe("test", () => {
  it("test", () => {
    let firstNameList = ["ahmad", "mohammad", "alla"];
    let LastNameList = ["done", "jood", "cr"];
    let randomIndexforthefirstname = Math.floor(
      Math.random() * firstNameList.length
    );
    let randomIndexforthelastname = Math.floor(
      Math.random() * LastNameList.length
    );

    console.log(
      firstNameList[randomIndexforthefirstname] +
        "  " +
        LastNameList[randomIndexforthelastname]
    );
    let randomnumbertoemail = Math.floor (Math.random() * (5000)).toString();
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    cy.get("#firstname").type(firstNameList[randomIndexforthefirstname]);
    cy.get("#lastname").type(LastNameList[randomIndexforthelastname]);
    cy.get("#email_address").type(
      firstNameList[randomIndexforthefirstname] +
        "." +
        LastNameList[randomIndexforthelastname] +
        randomnumbertoemail +
        "@gmail.com"
    );
    cy.get('#password').type("K#ak00000000")
    cy.get('#password-confirmation').type("K#ak00000000")

    
  });
});
