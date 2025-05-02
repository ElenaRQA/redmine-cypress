import { userData } from "../../support/getEnvData";
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
    homePage.verifyTitle(
      userData.lang,
      "Projects - Redmine",
      "Проекты - Redmine"
    );
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
    cy.get("body").wait(500).type("{enter}");
    homePage.verifyUrlContains("q=wiki");
  });
});
