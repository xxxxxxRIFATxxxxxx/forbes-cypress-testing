class homePageLinks {
   homepage() {
      return cy.visit('https://www.forbes.com/');
   };

   subscribe() {
      return cy.get('body > div.main-content.main-content--universal-header > header > nav > div.header__right > div > a');
   };

   signIn() {
      return cy.get('body > div.main-content.main-content--universal-header > header > nav > div.header__right > div > div > button');
   }

   searchBtn() {
      return cy.get('body > div.main-content.main-content--universal-header > header > nav > div.header__right > button');
   }

   searchInput() {
      return cy.get('body > div.main-content.main-content--universal-header > div.search-modal > form > input');
   }

   explore() {
      return cy.get('body > div.main-content.main-content--universal-header > header > nav > div.header__left > button.icon--hamburger');
   }

   billionaire() {
      return cy.get('body > div.main-content.main-content--universal-header > header > nav > div.header__channels--wrapper > ul > li.header__channel.header__color--centennial-silver.header__hoverable');
   }

   worldsBillionaire() {
      return cy.get('body > div.main-content.main-content--universal-header > header > nav > div.header__channels--wrapper > ul > li.header__channel.header__color--centennial-silver.header__hoverable > div.header__subnav > ul > li:nth-child(2) > a');
   }

   forbes400() {
      return cy.get('body > div.main-content.main-content--universal-header > header > nav > div.header__channels--wrapper > ul > li.header__channel.header__color--centennial-silver.header__hoverable > div.header__subnav > ul > li:nth-child(3) > a');
   }

   innovation() {
      return cy.get('body > div.main-content.main-content--universal-header > header > nav > div.header__channels--wrapper > ul > li.header__channel.header__color--diamondring-blue.header__hoverable > a');
   }

   fiveG() {
      return cy.get('body > div.main-content.main-content--universal-header > header > nav > div.header__channels--wrapper > ul > li.header__channel.header__color--diamondring-blue.header__hoverable > div.header__subnav > ul > li:nth-child(2) > a');
   }

   ai() {
      return cy.get('body > div.main-content.main-content--universal-header > header > nav > div.header__channels--wrapper > ul > li.header__channel.header__color--diamondring-blue.header__hoverable > div.header__subnav > ul > li:nth-child(3) > a');
   }

   forbesLiveEvents() {
      return cy.get('body > div.main-content.main-content--universal-header > footer > div.footer--desktop.fs-content > div.footer__content > div:nth-child(1) > div:nth-child(2) > a');
   }

   forbesBillionairesPortfolio() {
      return cy.get('body > div.main-content.main-content--universal-header > footer > div.footer--desktop.fs-content > div.footer__content > div:nth-child(1) > div:nth-child(4) > a:nth-child(1)');
   }
}

export default homePageLinks