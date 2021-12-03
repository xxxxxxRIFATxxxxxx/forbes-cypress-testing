import homePageLinks from '../pageObjects/homePageLinks';
import searchPageLinks from '../pageObjects/searchPageLinks';
import testData from '../fixtures/testData.json';

describe('User visit diffrent pages on forbes.com', () => {
    const homePage = new homePageLinks();
    const searchPage = new searchPageLinks();

    // For uncaught error
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('UI Test 5.1 - User click "Search button" and type Bangladesh and press Enter', () => {
        homePage.homepage();
        homePage.searchBtn().click();
        homePage.searchInput().type("Bangladesh{enter}");
        cy.contains("Bangladesh");
    });

    it('UI Test 5.2 - User click "Search button" and type Bangladesh and press Enter', () => {
        homePage.homepage();
        homePage.searchBtn().click();
        homePage.searchInput().type("Bangladesh{enter}");
        cy.contains("Bangladesh");
    });

    it('UI Test 5.3 - User click "Search button" and type Bangladesh and press Enter then click Most Recent', () => {
        homePage.homepage();
        homePage.searchBtn().click();
        homePage.searchInput().type("Bangladesh{enter}");
        cy.contains("Bangladesh");
        searchPage.mostRecent().click();
        cy.url().should('include', 'recent');
    });

    it('UI Test 5.4.1 - User click "Search button" and type Bangladesh and press Enter', () => {
        homePage.homepage();
        homePage.searchBtn().click();
        homePage.searchInput().type("Bangladesh{enter}");
        cy.contains("Bangladesh");
    });

    it('UI Test 5.4.2 - User click "Search button" and type Bangladesh and press Enter and click all time then click past year', () => {
        homePage.homepage();
        homePage.searchBtn().click();
        homePage.searchInput().type("Bangladesh{enter}");
        cy.contains("Bangladesh");
        searchPage.allTime().click();
        searchPage.pastYear().click();
        cy.url().should('include', 'year');
    });

    it('UI Test 5.4.3 - User click "Search button" and type Bangladesh and press Enter and click all time then click past month', () => {
        homePage.homepage();
        homePage.searchBtn().click();
        homePage.searchInput().type("Bangladesh{enter}");
        cy.contains("Bangladesh");
        searchPage.allTime().click();
        searchPage.pastMonth().click();
        cy.url().should('include', 'month');
    });

    it('UI Test 5.4.4 - User click "Search button" and type Bangladesh and press Enter and click all time then click past week', () => {
        homePage.homepage();
        homePage.searchBtn().click();
        homePage.searchInput().type("Bangladesh{enter}");
        cy.contains("Bangladesh");
        searchPage.allTime().click();
        searchPage.pastWeek().click();
        cy.url().should('include', 'week');
    });

    it('UI Test 5.4.5 - User click "Search button" and type Bangladesh and press Enter and click all time then click today', () => {
        homePage.homepage();
        homePage.searchBtn().click();
        homePage.searchInput().type("Bangladesh{enter}");
        cy.contains("Bangladesh");
        searchPage.allTime().click();
        searchPage.today().click();
        cy.url().should('include', 'today');
    });
});