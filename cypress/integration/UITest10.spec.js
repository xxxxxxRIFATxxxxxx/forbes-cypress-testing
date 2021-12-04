import homePageLinks from '../pageObjects/homePageLinks';

describe('User visit diffrent pages on forbes.com', () => {
    const homePage = new homePageLinks();

    // For uncaught error
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('UI Test 10.1 - User visit Home page and click "Forbes Israel"', () => {
        homePage.homepage();
        homePage.forbesIsrael().click({ force: true });
        cy.title().should('eq', 'פורבס ישראל - Forbes Israel');
    });

    it('UI Test 10.2 - User visit Home page and click "Forbes Japan"', () => {
        homePage.homepage();
        homePage.forbesJapan().click({ force: true });
        cy.title().should('eq', 'Forbes JAPAN（フォーブス ジャパン）');
    });
});