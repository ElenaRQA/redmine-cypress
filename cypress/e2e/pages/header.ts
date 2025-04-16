import Common from "./common";

abstract class Header extends Common {
  homeLink = () => cy.get('#top-menu a[href="/"]');
  projectsLink = () => cy.get('#top-menu a[href="/projects"]');
  helpLink = () => cy.get('#top-menu a[href="/help"]');
  loginBtn = () => cy.get('a[href="/login"]');
  logoutBtn = () => cy.get('a[href="/logout"]');
  registerBtn = () => cy.get('a[href="/register"]');
  myAccountLink = () => cy.get('a[href="/my/account"]');
  myPageLink = () => cy.get('a[href="/my/page"]');
  searchInput = () => cy.get("#q");
  searchSubmit = () => cy.get('#search-form input[type="submit"]');
  footerLinks = () => cy.get("footer a");
}
export default Header;
