import homePageLinks from '../pageObjects/homePageLinks';
import subscribePageLinks from '../pageObjects/subscribePageLinks';
import testData from '../fixtures/testData.json';

describe('User visit diffrent pages on forbes.com', () => {
    const homePage = new homePageLinks();
    const subscribePage = new subscribePageLinks();

    // For uncaught error
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('UI Test 2 - User visit "Subscribe Page" and Click any Yearly/ Monthly/ Two years', () => {
        homePage.homepage();
        homePage.subscribe().click();
        cy.visit(testData.subscribeURL);
        subscribePage.monthlyButton().click()
    });
});