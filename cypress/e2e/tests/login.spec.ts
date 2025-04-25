import { loginPage } from "../pages";
import credentials from "../../fixtures/credentials.json";

describe("Login Tests", () => {
  it("should login successfully with valid credentials", () => {
    loginPage.visit("/login");
    loginPage.loginWithEnvCredentials();
    loginPage.logoutBtn().should("be.visible");
  });

  it("should show an error with invalid credentials", () => {
    const { username, password } = credentials.invalidUser;

    loginPage.visit("/login");
    loginPage.login(username, password);
    cy.document().then((doc) => {
      const isRussian = doc.documentElement.lang === "ru";

      if (isRussian) {
        loginPage
          .errorMessage()
          .should("contain", "Неправильное имя пользователя или пароль");
      } else {
        loginPage.errorMessage().should("contain", "Invalid user or password");
      }
    });
  });
});
