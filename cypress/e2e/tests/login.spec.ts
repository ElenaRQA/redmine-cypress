import { loginPage } from "../pages";

describe("Login Tests", () => {
  it("should login successfully with valid credentials", () => {
    loginPage.visit("/login");
    loginPage.loginWithEnvCredentials();
    loginPage.logoutBtn().should("be.visible");
  });

  it("should show an error with invalid credentials from fixture", () => {
    cy.fixture("credentials.json").then((creds) => {
      const { username, password } = creds.invalidUser;
      loginPage.visit("/login");
      loginPage.login(username, password);
      loginPage
        .errorMessage()
        .should("contain", "Неправильное имя пользователя или пароль");
    });
  });
});
