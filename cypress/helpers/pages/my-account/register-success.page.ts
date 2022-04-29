export default class RegisterSuccessPage{

    static readonly url=Cypress.config().baseUrl+'/index.php?route=account/success';

    private static readonly Selectors={
        greetingMessage:'#content p:nth-of-type(1)',
        continueButton:'.btn.btn-primary'
    }

    static verifyRegistrationGreetingMessage(expectedMessage:string){
        Cypress.log({displayName:'assert',message:[`verifyRegistrationGreetingMessage`]});
        cy.get(this.Selectors.greetingMessage).should('contain.text',expectedMessage);
    };

    static clickOnContinueButton():void{
        cy.get(this.Selectors.continueButton).click();
    }
}