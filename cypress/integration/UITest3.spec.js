import homePageLinks from '../pageObjects/homePageLinks';

describe('User visit diffrent pages on forbes.com', () => {
    const homePage = new homePageLinks();

    // For uncaught error
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('UI Test 3 - User click "Sign in button" and Login with email and password', () => {
        homePage.homepage();
        homePage.signIn().click({ force: true });
    });
});