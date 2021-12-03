class searchPageLinks {
    mostRecent() {
        return cy.get('body > div.main-content.main-content--overflow-visible.main-content--universal-header > main > div.search-content-wrapper > div.search-content.main-content__left-col > div.search-sort > div.search-sort__button.search-sort__button-recent');
    }

    allTime() {
        return cy.get('body > div.main-content.main-content--overflow-visible.main-content--universal-header > main > div.search-content-wrapper > div.search-content.main-content__left-col > div.search-sort > div.search-sort__dropdown');
    }

    pastYear() {
        return cy.get('body > div.main-content.main-content--overflow-visible.main-content--universal-header > main > div.search-content-wrapper > div.search-content.main-content__left-col > div.search-sort > div.search-sort__dropdown > ul > li:nth-child(2)');
    }

    pastMonth() {
        return cy.get('body > div.main-content.main-content--overflow-visible.main-content--universal-header > main > div.search-content-wrapper > div.search-content.main-content__left-col > div.search-sort > div.search-sort__dropdown > ul > li:nth-child(3)');
    }

    pastWeek() {
        return cy.get('body > div.main-content.main-content--overflow-visible.main-content--universal-header > main > div.search-content-wrapper > div.search-content.main-content__left-col > div.search-sort > div.search-sort__dropdown > ul > li:nth-child(4)');
    }

    today() {
        return cy.get('body > div.main-content.main-content--overflow-visible.main-content--universal-header > main > div.search-content-wrapper > div.search-content.main-content__left-col > div.search-sort > div.search-sort__dropdown > ul > li:nth-child(5)');
    }
}

export default searchPageLinks