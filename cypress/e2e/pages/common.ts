export default abstract class Common {
  visit(url: string) {
    cy.visit(url);
  }

  verifyTitle(lang: string, expectedTitleEn: string, expectedTitleRu: string) {
    if (lang === "en") {
      cy.title().should("eq", expectedTitleEn);
    }

    if (lang === "ru") {
      cy.title().should("eq", expectedTitleRu);
    }
  }

  verifyUrlContains(path: string) {
    cy.url().should("include", path);
  }

  verifyElementContains(selector: string, text: string) {
    cy.get(selector).should("contain", text);
  }

  getPageLanguage(): Cypress.Chainable<string> {
    return cy.document().then((doc) => doc.documentElement.lang);
  }
}
