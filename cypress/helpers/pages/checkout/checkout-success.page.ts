export default class CheckoutSuccessPage{

    private static readonly Selectors={
        orderPlacedHeadingField:'#content h1',
        continueButton:'.btn.btn-primary'
    }

    static verifyOrderPlacedHeading(expectedMessage:string){
        Cypress.log({displayName:'assert',message:[`verifyOrderPlacedHeading`]});
        cy.get(this.Selectors.orderPlacedHeadingField).should("contain.text",expectedMessage);
    }

    static clickContinueButton(){
        cy.get(this.Selectors.continueButton).click();
    }
}