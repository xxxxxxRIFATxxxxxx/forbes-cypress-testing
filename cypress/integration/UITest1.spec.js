import homePageLinks from '../pageObjects/homePageLinks';

describe('User visit diffrent pages on forbes.com', () => {
    const homePage = new homePageLinks();

    // For uncaught error
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('UI Test 1 - User visit "Home Page"', () => {
        homePage.homepage();
        cy.title().should('eq', 'Forbes');
    });
});