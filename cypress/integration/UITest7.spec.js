import homePageLinks from '../pageObjects/homePageLinks';
import forbesLiveEventsPageLinks from '../pageObjects/forbesLiveEventsPageLinks';

describe('User visit diffrent pages on forbes.com', () => {
    const homePage = new homePageLinks();
    const forbesLiveEventsPage = new forbesLiveEventsPageLinks();

    // For uncaught error
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('UI Test 7.1 - User visit Home page and click "Forbes Live Events" and then click Covid 19 Learn More', () => {
        homePage.homepage();
        homePage.forbesLiveEvents().click();
        forbesLiveEventsPage.covidLearnMore().click();
        cy.contains('Our team is planning to resume');
    });
});