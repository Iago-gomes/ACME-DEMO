describe("Login sem informações", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://demo.applitools.com/index.html");
  });

  it("Login sem informações", () => {
    cy.title().should("include", "ACME demo app");
    cy.get(".form-check-input").click();
    cy.get("#log-in").click();
    cy.xpath("//*[@id='time']").should(
      "have.text",
      "Your nearest branch closes in: 30m 5s"
    );
  });
});
