export default class GlobalMessageComponents{

    private static readonly Selectors={
        successAlert:'.alert.alert-success'
    }

    static verifySuccessAlertMessage(expectedMessage:string):void{
        Cypress.log({displayName:'assert',message:[`verifySuccessAlertMessage`]});
        cy.get(this.Selectors.successAlert).should('be.visible');
        cy.get(this.Selectors.successAlert).should('contain.text',expectedMessage);
    }
}