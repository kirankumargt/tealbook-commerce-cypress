import {Customer} from "../../../models/customer";
import BasePage from "../base.page";

export default class RegisterAccountPage extends BasePage{

    static readonly url=Cypress.config().baseUrl+'/index.php?route=account/register';

    private static readonly Selectors={
        firstNameInput:'#input-firstname',
        lastNameInput:'#input-lastname',
        emailInput:'#input-email',
        telephoneInput:'#input-telephone',
        passwordInput:'#input-password',
        passwordConfirmInput:'#input-confirm',
        privacyPolicyAgreeCheckBox:'input[name="agree"]',
        continueButton:'input[value="Continue"]'
    };

    static enterRegistrationForm(customer:Customer,checkAgreeCondition:boolean=true):void{
        cy.setText(this.Selectors.firstNameInput,customer.firstName);
        cy.setText(this.Selectors.lastNameInput,customer.lastName);
        cy.setText(this.Selectors.emailInput,customer.email);
        cy.setText(this.Selectors.telephoneInput,customer.telephone);
        cy.setText(this.Selectors.passwordInput,customer.password);
        cy.setText(this.Selectors.passwordConfirmInput,customer.passwordConfirm);
        if(checkAgreeCondition){
            cy.get(this.Selectors.privacyPolicyAgreeCheckBox).check();
        }
        cy.get(this.Selectors.continueButton).click();
    };
}