import homePageLinks from '../pageObjects/homePageLinks';
import billionairesPageLinks from '../pageObjects/billionairesPageLinks';
import fiveGPageLinks from '../pageObjects/fiveGPageLinks';
import metaVersePostPage from '../pageObjects/metaVersePostPage';

describe('User visit diffrent pages on forbes.com', () => {
    const homePage = new homePageLinks();
    const billionairePage = new billionairesPageLinks();
    const fiveGPage = new fiveGPageLinks();
    const metaVersePage = new metaVersePostPage();

    // For uncaught error
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('UI Test 6.1.1.1 - User click Explore and click Billionaire and click on 3 Social media', () => {
        homePage.homepage();
        homePage.explore().click();
        homePage.billionaire().trigger('mouseover');
        homePage.worldsBillionaire().click({ force: true });
        billionairePage.facebookShare().click();
        billionairePage.twitterShare().click();
        billionairePage.linkdinShare().click();
    });

    it('UI Test 6.1.1.2 - User click Explore and click Billionaire and click on mail type mail id and type subject', () => {
        homePage.homepage();
        homePage.explore().click();
        homePage.billionaire().trigger('mouseover');
        homePage.worldsBillionaire().click({ force: true });
        billionairePage.mail().click();
    });

    it('UI Test 6.1.1.3 - User click Explore and click Billionaire and click on search type Jeff Bezos', () => {
        homePage.homepage();
        homePage.explore().click();
        homePage.billionaire().trigger('mouseover');
        homePage.worldsBillionaire().click({ force: true });
        billionairePage.search().click();
        cy.title().should('eq', 'Forbes Search');
        billionairePage.searchInput().type('Jeff Bezos');
    });

    it('UI Test 6.1.1.4 - User click Explore and click Billionaire and click on Elon Musk and click on Full Profile', () => {
        homePage.homepage();
        homePage.explore().click();
        homePage.billionaire().trigger('mouseover');
        homePage.worldsBillionaire().click({ force: true });
        billionairePage.elonMusk().click();
        billionairePage.elonMusk().click();
        cy.visit('https://www.forbes.com/profile/elon-musk/?list=billionaires&sh=47c18a57999b');
        cy.title().should("eq", "Elon Musk");
    });

    it('UI Test 6.1.2 - User click Explore and click Forbes 400', () => {
        homePage.homepage();
        homePage.explore().click();
        homePage.billionaire().trigger('mouseover');
        homePage.forbes400().click({ force: true });
        cy.title().should("eq", "The Forbes 400 2021");
    });

    it('UI Test 6.2.1.1- User click Explore and click Innovation click 5G click any post and share all social media', () => {
        homePage.homepage();
        homePage.explore().click();
        homePage.innovation().trigger('mouseover');
        homePage.fiveG().click({ force: true });
        fiveGPage.metaVersePost().click({ force: true });
        metaVersePage.facebook().click({ force: true });
        metaVersePage.twitter().click({ force: true });
        metaVersePage.linkedIn().click({ force: true });
    });

    it('UI Test 6.2.1.2- User click Explore and click Innovation click 5G click any post and click on 2 social media for follow and click website', () => {
        homePage.homepage();
        homePage.explore().click();
        homePage.innovation().trigger('mouseover');
        homePage.fiveG().click({ force: true });
        fiveGPage.metaVersePost().click({ force: true });
        metaVersePage.twitterFollow().click();
        metaVersePage.linkedInFollow().click();
        metaVersePage.websiteFollow().click({ force: true });
    });

    it('UI Test 6.2.1.3- User click Explore and click Innovation click 5G click any post and click on read more', () => {
        homePage.homepage();
        homePage.explore().click();
        homePage.innovation().trigger('mouseover');
        homePage.fiveG().click({ force: true });
        fiveGPage.metaVersePost().click({ force: true });
        metaVersePage.readMore();
    });

    it('UI Test 6.2.2- User click Explore and click Innovation click 5G click any post and click on read more', () => {
        homePage.homepage();
        homePage.explore().click();
        homePage.innovation().trigger('mouseover');
        homePage.ai().click({ force: true });
        cy.title().should('eq', 'AI');
    });
});