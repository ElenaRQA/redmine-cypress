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
      const isEnglish = doc.documentElement.lang === "en";

      if (isEnglish) {
        loginPage
          .errorMessage()
          .should("contain", "Incorrect username or password.");
      } else {
        loginPage
          .errorMessage()
          .should("contain", "Неправильное имя пользователя или пароль");
      }
    });
    //loginPage
    //.errorMessage()
    //.should("contain", "Неправильное имя пользователя или пароль");
  });
});
