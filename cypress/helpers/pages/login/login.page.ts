import {Customer} from "../../../models/customer";

export default class LoginPage{
    static readonly url=Cypress.config().baseUrl+'/index.php?route=account/login';

    private static readonly Selectors={
        emailAddressInput:'#input-email',
        passwordInput:'#input-password',
        loginButton:'input[value="Login"]'
    }

    static login(customer:Customer){
        cy.testTearDown();
        cy.visit(this.url);
        cy.setText(this.Selectors.emailAddressInput,customer.email);
        cy.setText(this.Selectors.passwordInput,customer.password);
        cy.get(this.Selectors.loginButton).click();
    }
}