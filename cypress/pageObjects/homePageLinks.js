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
}

export default homePageLinks