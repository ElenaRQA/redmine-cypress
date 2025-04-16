import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();

describe("Login Tests", () => {
  it("should login successfully with valid credentials", () => {
    loginPage.visit("/login");
    loginPage.loginWithEnvCredentials();
    loginPage.logoutBtn().should("be.visible");
  });

  it("should show an error with invalid credentials", () => {
    loginPage.visit("/login");
    loginPage.login("invalidUser", "invalidPassword");
    loginPage
      .errorMessage()
      .should("contain", "Неправильное имя пользователя или пароль");
  });
});
