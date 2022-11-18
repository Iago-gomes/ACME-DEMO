describe("Todos os testes", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://demo.applitools.com/index.html");
    cy.xpath("//input[@id='username']")
      .type("Clara")
      .should("have.value", "Clara");
    cy.xpath("//input[@id='password']")
      .type("BestBelugas")
      .should("have.value", "BestBelugas");
    cy.get(".form-check-input").click();
    cy.get("#log-in").click();
    cy.xpath("//*[@id='time']").should(
      "have.text",
      "Your nearest branch closes in: 30m 5s"
    );
  });

  it("Financial Overview e Recent Transactions", () => {
    cy.get(".hidden-mobile > .balance-value").should(
      "have.text",
      "\n                          $350%7\n                        "
    );
    cy.get(".hidden-mobile > .balance-link > .btn > span").click();
    cy.get(":nth-child(2) > .balance-value").should(
      "have.text",
      "\n                          $17,800\n                        "
    );
    cy.get(":nth-child(2) > .balance-link > .btn > span").click();
    cy.get(":nth-child(3) > .balance-value").should(
      "have.text",
      "\n                          $180\n                        "
    );
    cy.get(":nth-child(3) > .balance-link > .btn > span").click();
  });
});
