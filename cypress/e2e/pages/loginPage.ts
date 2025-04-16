import Header from "./header";

export default class LoginPage extends Header {
  userNameInput = () => cy.get("#username");
  passwordInput = () => cy.get("#password");
  loginBtnSubmit = () => cy.get('input[name="login"]');
  errorMessage = () => cy.get("#flash_error");
  loginWithEnvCredentials() {
    cy.visit("/login");
    this.login(Cypress.env("user"), Cypress.env("password"));
  }

  login(username: string, password: string) {
    this.userNameInput().type(username);
    this.passwordInput().type(password);
    this.loginBtnSubmit().click();
  }
}
