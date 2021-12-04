class billionairesPageLinks {
    facebookShare() {
        return cy.get('#gatsby-focus-wrapper > div > div > div.title.has-left-rail > div.left-rail > div:nth-child(3) > div.social > div > div:nth-child(1)');
    }

    twitterShare() {
        return cy.get('#gatsby-focus-wrapper > div > div > div.title.has-left-rail > div.left-rail > div:nth-child(3) > div.social > div > div:nth-child(2)');
    }

    linkdinShare() {
        return cy.get('#gatsby-focus-wrapper > div > div > div.title.has-left-rail > div.left-rail > div:nth-child(3) > div.social > div > div:nth-child(3)');
    }

    mail() {
        return cy.get('#gatsby-focus-wrapper > div > div > div.title.has-left-rail > div.left-rail > div:nth-child(3) > div.social > div > div:nth-child(4)');
    }

    search() {
        return cy.get('#gatsby-focus-wrapper > div > header > div > a.header__search');
    }

    searchInput() {
        return cy.get('body > div.main-content.main-content--overflow-visible.main-content--universal-header > main > div.search-content-wrapper > div.search-content.main-content__left-col > div.search-box > input');
    }

    elonMusk() {
        return cy.get('#elon-musk > div.personName');
    }

    elonMuskProfile() {
        return cy.get('#gatsby-focus-wrapper > div > div > div.table-block > div.table-block-wrapper > div.table > div.table-body > div:nth-child(1) > div.expanded-content > div.person-bio > div.bio-container > div.bio-button-container > a');
    }
}

export default billionairesPageLinks