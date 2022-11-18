describe("Login sem informações", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://demo.applitools.com/index.html");
  });

  it("Realizar login com informações", () => {
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
});
