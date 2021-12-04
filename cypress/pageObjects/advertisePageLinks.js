class advertisePageLinks {
    usEurope() {
        return cy.get('body > main > div.media-hero-section > div > div.tabs-widget > div > ul > li:nth-child(1) > a');
    }

    usEurope1stPost() {
        return cy.get('#\\32 021_media_kit > div > div > div.col-md-5.media-kit-content > div > a');
    }

    asiaPacific() {
        return cy.get('body > main > div.media-hero-section > div > div.tabs-widget > div > ul > li:nth-child(2) > a');
    }

    asiaPacificPost() {
        return cy.get('#\\32 021_forbes_asia_media_kit > div > div > div.col-md-5.media-kit-content > div > a');
    }
}

export default advertisePageLinks