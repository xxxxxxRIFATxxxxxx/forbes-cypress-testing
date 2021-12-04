class fiveGPageLinks {
    metaVersePost() {
        return cy.get('#row-2 > div > div > div > div.chansec-stream__content > div > div > article:nth-child(1) > div.stream-item__text > h3 > a');
    }
}

export default fiveGPageLinks