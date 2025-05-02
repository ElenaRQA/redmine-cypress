import credentials from "../../fixtures/credentials.json";
import loginPage from "../pages/loginPage";

describe("Login Tests", () => {
  const { username, password } = credentials.invalidUser;

  it("should login successfully with valid credentials", () => {
    loginPage.visit("/login");
    loginPage.loginWithEnvCredentials();
    loginPage.logoutBtn().should("be.visible");
  });

  it("should show an error with invalid credentials", () => {
    loginPage.visit("/login");
    loginPage.login(username, password);
    loginPage.getPageLanguage().then((lang) => {
      const expectedErrorMessage =
        lang === "ru"
          ? "Неправильное имя пользователя или пароль"
          : "Invalid user or password";
      loginPage.errorMessage().should("contain", expectedErrorMessage);
    });
  });
});
