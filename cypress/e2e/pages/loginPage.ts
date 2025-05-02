import { userData } from "../../support/getEnvData";
import Header from "./headerPage";

class LoginPage extends Header {
  userNameInput = () => cy.get("#username");
  passwordInput = () => cy.get("#password");
  loginBtnSubmit = () => cy.get('input[name="login"]');
  errorMessage = () => cy.get("#flash_error");

  loginWithEnvCredentials() {
    cy.visit("/login");
    this.login(userData.username, userData.password);
  }

  login(username: string, password: string) {
    this.userNameInput().type(username);
    this.passwordInput().type(password);
    this.loginBtnSubmit().click();
  }
}
export default new LoginPage();
