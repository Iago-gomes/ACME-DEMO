describe("Login sem informações", () => {
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
  });

  it("Funções Menu teste", () => {
    cy.xpath("//*[@id='time']").should(
      "have.text",
      "Your nearest branch closes in: 30m 5s"
    );
    cy.get(".top-menu-controls > .element-search > input").type(
      "Starbucks{enter}"
    );
    cy.get(".messages-notifications > .os-icon").click();
    cy.get(".top-icon > :nth-child(1)").click();
    cy.get(
      ".top-menu-controls > .logged-user-w > .logged-user-i > .avatar-w > img"
    ).click();
    cy.get(".btn-primary").should("have.text", "Add Account").click();
    cy.get(".btn-success").should("have.text", "Make Payment").click();
  });
});
