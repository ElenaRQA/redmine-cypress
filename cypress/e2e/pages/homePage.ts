import Header from "./headerPage";

class HomePage extends Header {
  overviewTab = () => cy.get('#main-menu a[href="/projects/redmine"]');
  downloadTab = () => cy.get('#main-menu a[href="/projects/redmine/files"]');
  activityTab = () => cy.get('#main-menu a[href="/projects/redmine/activity"]');
  roadmapTab = () => cy.get('#main-menu a[href="/projects/redmine/roadmap"]');
  issuesTab = () => cy.get('#main-menu a[href="/projects/redmine/issues"]');
  newsTab = () => cy.get('#main-menu a[href="/projects/redmine/news"]');
  wikiTab = () => cy.get('#main-menu a[href="/projects/redmine/wiki"]');
  forumsTab = () => cy.get('#main-menu a[href="/projects/redmine/boards"]');
  repositoryTab = () =>
    cy.get('#main-menu a[href="/projects/redmine/repository"]');
  latestNewsSection = () => cy.get("#content .news");
  latestNewsItems = () => cy.get("#content .news .news-item");
}
export default new HomePage();
