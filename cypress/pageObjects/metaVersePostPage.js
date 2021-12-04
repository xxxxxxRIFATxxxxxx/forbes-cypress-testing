class metaVersePostPage {
    facebook() {
        return cy.get('#article-stream-0 > div:nth-child(2) > div.body-container > div.article-body-container.show-iframes > div.article-body.fs-article.fs-responsive-text.current-article > div.article-sharing > ul > li:nth-child(1) > a');
    }

    twitter() {
        return cy.get('#article-stream-0 > div:nth-child(2) > div.body-container > div.article-body-container.show-iframes > div.article-body.fs-article.fs-responsive-text.current-article > div.article-sharing > ul > li:nth-child(2) > a');
    }

    linkedIn() {
        return cy.get('#article-stream-0 > div:nth-child(2) > div.body-container > div.article-body-container.show-iframes > div.article-body.fs-article.fs-responsive-text.current-article > div.article-sharing > ul > li:nth-child(3) > a');
    }

    twitterFollow() {
        return cy.get('#article-stream-0 > div:nth-child(2) > div.body-container > div.article-body-container.show-iframes > div.sigfile.article-body.fs-responsive-text > a:nth-child(2)');
    }

    linkedInFollow() {
        return cy.get('#article-stream-0 > div:nth-child(2) > div.body-container > div.article-body-container.show-iframes > div.sigfile.article-body.fs-responsive-text > a:nth-child(3)')
    }


    websiteFollow() {
        return cy.get('#article-stream-0 > div:nth-child(2) > div.body-container > div.article-body-container.show-iframes > div.sigfile.article-body.fs-responsive-text > a:nth-child(5)');
    }

    readMore() {
        return cy.get('#article-stream-0 > div:nth-child(2) > div.body-container > div.article-body-container.show-iframes > div.bottom-contrib-block > p > span > button');
    }
}

export default metaVersePostPage