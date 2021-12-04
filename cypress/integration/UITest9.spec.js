import homePageLinks from '../pageObjects/homePageLinks';
import advertisePageLinks from '../pageObjects/advertisePageLinks';

describe('User visit diffrent pages on forbes.com', () => {
    const homePage = new homePageLinks();
    const advertisePage = new advertisePageLinks();

    // For uncaught error
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('UI Test 9.1.1 - User visit Home page and click "Advertise" and then click US/Europe and click Learn more from the 1st post', () => {
        homePage.homepage();
        homePage.advertise().click();
        advertisePage.usEurope().click({ force: true })
        advertisePage.usEurope1stPost().click({ force: true });
    });

    it('UI Test 9.1.2 - User visit Home page and click "Advertise" and then click Asia Pacific and click View from the 1st post', () => {
        homePage.homepage();
        homePage.advertise().click();
        advertisePage.asiaPacific().click({ force: true })
        advertisePage.asiaPacificPost().click({ force: true });
    });
});