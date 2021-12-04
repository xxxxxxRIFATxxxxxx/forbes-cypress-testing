class billionairesPortfolioPageLinks {
    edition() {
        return cy.get('#row-0 > div.channel__header > div.edition-dropdown > button');
    }

    us() {
        return cy.get('#row-0 > div.channel__header > div.edition-dropdown.edition-dropdown--open > ul > li:nth-child(1) > a');
    }

    intelSaysPost() {
        return cy.get('#row-0 > div.channel__content > div.card.card--large.csf-block > div.card--large__title > a');
    }
}

export default billionairesPortfolioPageLinks