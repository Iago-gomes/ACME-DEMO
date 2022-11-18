describe("Todos os testes", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://demo.applitools.com/index.html");
  });

  // Não deveria ser possível entrar no site sem as devidas informações de Login
  it("Login sem informações", () => {
    cy.title().should("include", "ACME demo app");
    cy.get(".form-check-input").click();
    cy.get("#log-in").click();
    cy.xpath("//*[@id='time']").should(
      "have.text",
      "Your nearest branch closes in: 30m 5s"
    );
  });

  // Login efetuado com sucesso!!
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

  // Não funciona, pois não é realizado o direcionamento para o login digital.
  it("login social", () => {
    cy.get('[style="display: inline-block; margin-bottom:4px;"] > img').click();
    cy.get(":nth-child(2) > img").click();
    cy.get(":nth-child(3) > img").click();
  });

  // Menus não funcionam, pois não é realizado o redirecionamento
  it("Funções Menu teste", () => {
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
    cy.get(".logged-user-toggler-arrow > .os-icon").click();
    cy.get(".selected > a > span").should("have.text", "Credit cards").click();
    cy.get(".main-menu > :nth-child(3) > a > span")
      .should("have.text", "Debit cards")
      .click();
    cy.get(":nth-child(5) > a > span").should("have.text", "Loans").click();
    cy.get(":nth-child(6) > a > span").should("have.text", "Mortgages").click();
  });
  // os btts não funcionam, pois não é realizado o redirecionamento
  it("Financial Overview e Recent Transactions", () => {
    cy.xpath("//input[@id='username']")
      .type("Clara")
      .should("have.value", "Clara");
    cy.xpath("//input[@id='password']")
      .type("BestBelugas")
      .should("have.value", "BestBelugas");
    cy.get(".form-check-input").click();
    cy.get("#log-in").click();
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
