export default class HomePage{
    static readonly url=Cypress.config().baseUrl+'/index.php?route=common/home';

    static loadHomePage(){
        cy.visit(this.url);
    }
}