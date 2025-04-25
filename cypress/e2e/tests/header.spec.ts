import HomePage from "../pages/homePage";

const homePage = new HomePage();

describe("Header functionality", () => {
  beforeEach(() => {
    homePage.visit("/");
  });
  it("should show Register button and navigate correctly", () => {
    homePage.registerBtn().should("be.visible").click();
    homePage.verifyUrlContains("/register");
  });

  it("should open Projects from header and verify page title", () => {
    homePage.projectsLink().click();
    //homePage.verifyTitle("Проекты - Redmine");
    cy.document().then((doc) => {
      const isRussian = doc.documentElement.lang === "ru";

      if (isRussian) {
        homePage.verifyTitle("Проекты - Redmine");
        homePage.verifyTitle("Projects - Redmine");
      }
    });
  });

  it("should not show My Account link if user is not logged in", () => {
    homePage.myAccountLink().should("not.exist");
  });

  it("should allow search input and show query in URL", () => {
    homePage.visit("/");
    homePage
      .searchInput()
      .should("be.visible")
      .type("wiki")
      .parents("form")
      .then(($form) => {
        ($form[0] as HTMLFormElement).submit();
      });
    homePage.verifyUrlContains("q=wiki");
  });
});
