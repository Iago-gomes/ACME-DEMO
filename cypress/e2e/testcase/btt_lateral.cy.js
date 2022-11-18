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

  it("Funções Menu teste", () => {
    cy.get(".logged-user-toggler-arrow > .os-icon").click();
    cy.get(".selected > a > span").should("have.text", "Credit cards").click();
    cy.get(".main-menu > :nth-child(3) > a > span")
      .should("have.text", "Debit cards")
      .click();
    cy.get(":nth-child(5) > a > span").should("have.text", "Loans").click();
    cy.get(":nth-child(6) > a > span").should("have.text", "Mortgages").click();
  });
});
