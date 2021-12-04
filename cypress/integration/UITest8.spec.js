import homePageLinks from '../pageObjects/homePageLinks';
import billionairesPortfolioPageLinks from '../pageObjects/billionairesPortfolioPageLinks';

describe('User visit diffrent pages on forbes.com', () => {
    const homePage = new homePageLinks();
    const billionairesPortfolioPage = new billionairesPortfolioPageLinks();

    // For uncaught error
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('UI Test 8.1.1 - User visit Home page and click "Forbes Billionaires Portfolio" and then click Edition and click US and click any post', () => {
        homePage.homepage();
        homePage.forbesBillionairesPortfolio().click();
        billionairesPortfolioPage.edition().click({ force: true });
        billionairesPortfolioPage.us().click({ force: true });
        billionairesPortfolioPage.intelSaysPost().click({ force: true });
        cy.title().should('eq', 'U.S. Intel Says Russia Is Preparing 175,000 Troops For Ukraine Offensive');

    });
});