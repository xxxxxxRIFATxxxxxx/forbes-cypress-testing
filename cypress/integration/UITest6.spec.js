import homePageLinks from '../pageObjects/homePageLinks';
import billionairesPageLinks from '../pageObjects/billionairesPageLinks';

describe('User visit diffrent pages on forbes.com', () => {
    const homePage = new homePageLinks();
    const billionairePage = new billionairesPageLinks();

    // For uncaught error
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    // it('UI Test 6.1.1.1 - User click Explore and click Billionaire and click on 3 Social media', () => {
    //     homePage.homepage();
    //     homePage.explore().click();
    //     homePage.billionaire().trigger('mouseover');
    //     homePage.worldsBillionaire().click({ force: true });
    //     billionairePage.facebookShare().click();
    //     billionairePage.twitterShare().click();
    //     billionairePage.linkdinShare().click();
    // });

    // it('UI Test 6.1.1.2 - User click Explore and click Billionaire and click on mail type mail id and type subject', () => {
    //     homePage.homepage();
    //     homePage.explore().click();
    //     homePage.billionaire().trigger('mouseover');
    //     homePage.worldsBillionaire().click({ force: true });
    //     billionairePage.mail().click();
    // });

    it('UI Test 6.1.1.3 - User click Explore and click Billionaire and click on search type Jeff Bezos', () => {
        homePage.homepage();
        homePage.explore().click();
        homePage.billionaire().trigger('mouseover');
        homePage.worldsBillionaire().click({ force: true });
        billionairePage.search().click();
        cy.title().should('eq', 'Forbes Search');
        billionairePage.searchInput().type('Jeff Bezos');
    });
});