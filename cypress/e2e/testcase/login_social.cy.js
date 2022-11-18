describe("Login sem informações", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://demo.applitools.com/index.html");
  });

  it("login social", () => {
    cy.get('[style="display: inline-block; margin-bottom:4px;"] > img').click();
    cy.get(":nth-child(2) > img").click();
    cy.get(":nth-child(3) > img").click();
  });
});
