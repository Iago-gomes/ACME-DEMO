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
    cy.get(":nth-child(1) > .text-center > .badge")
      .should("have.text", "Restaurant / Cafe")
      .click();
    cy.get(":nth-child(2) > .text-center > .badge")
      .should("have.text", "Finance")
      .click();
    cy.get(":nth-child(3) > .text-center > .badge")
      .should("have.text", "Software")
      .click();
    cy.get(":nth-child(4) > .text-center > .badge")
      .should("have.text", "Shopping")
      .click();
    cy.get(":nth-child(5) > .text-center > .badge")
      .should("have.text", "Ecommerce")
      .click();
    cy.get(":nth-child(6) > .text-center > .badge")
      .should("have.text", "Business")
      .click();
  });
});
