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
}

export default homePageLinks