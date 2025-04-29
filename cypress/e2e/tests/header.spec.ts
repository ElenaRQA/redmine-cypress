import homePage from "../pages/homePage";

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
    homePage.getPageLanguage().then((lang) => {
      const expectedTitle =
        lang === "ru" ? "Проекты - Redmine" : "Projects - Redmine";
      homePage.verifyTitle(expectedTitle);
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
