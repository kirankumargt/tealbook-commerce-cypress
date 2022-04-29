export default class MyAccountPage{
    static readonly url=Cypress.config().baseUrl+'/index.php?route=account/account';

    private static readonly Selectors={
        myAccountPageContent:'#account-account #content'
    }

    static verifyMyAccountContentIsLoaded():void{
        Cypress.log({displayName:'assert',message:[`verifyMyAccountContentIsLoaded`]});
        cy.get(this.Selectors.myAccountPageContent).should('contain.text',"My Account");
    }
}