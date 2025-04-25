import HomePage from "../pages/homePage";

const homePage = new HomePage();

describe("Home page main menu navigation", () => {
  beforeEach(() => {
    homePage.visit("/");
  });

  it("should go to Activity tab and verify URL", () => {
    homePage.activityTab().click();
    homePage.verifyUrlContains("/activity");
  });

  it("should go to Roadmap and verify presence of roadmapTab", () => {
    homePage.roadmapTab().click();
    homePage.verifyUrlContains("/roadmap");
    cy.document().then((doc) => {
      const isEnglish = doc.documentElement.lang === "en";

      if (isEnglish) {
        homePage.verifyTitle("Roadmap - Redmine");
      } else {
        homePage.verifyTitle("Оперативный план - Redmine");
      }
    });
    //homePage.verifyTitle("Оперативный план - Redmine");
  });

  it("should open Issues tab and search input should be visible", () => {
    homePage.issuesTab().click();
    homePage.verifyUrlContains("/issues");
    homePage.searchInput().should("exist");
  });

  it("should open News tab and validate URL", () => {
    homePage.newsTab().click();
    homePage.verifyUrlContains("/news");
  });
});
