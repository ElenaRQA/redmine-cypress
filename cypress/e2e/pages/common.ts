export default abstract class Common {
  visit(url: string) {
    cy.visit(url);
  }

  verifyTitle(expectedTitle: string) {
    cy.title().should("eq", expectedTitle);
  }

  verifyUrlContains(path: string) {
    cy.url().should("include", path);
  }

  verifyElementContains(selector: string, text: string) {
    cy.get(selector).should("contain", text);
  }
}
