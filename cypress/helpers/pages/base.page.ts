export default class BasePage {
    static readonly url = Cypress.config().baseUrl+'/';

    static load(): void {
        cy.visit(this.url);
    };
};