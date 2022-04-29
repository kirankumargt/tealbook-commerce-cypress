import {Customer} from "../../../models/customer";
import TextUtil from "../../utils/text.util";
import faker from "@faker-js/faker";

export default class CheckoutPage{

    private static readonly Selectors={
        billingFirstName:'#input-payment-firstname',
        billingLastName:'#input-payment-lastname',
        billingAddress1:'#input-payment-address-1',
        billingCity:'#input-payment-city',
        billingPostalCode:'#input-payment-postcode',
        billingCountry:'#input-payment-country',
        billingState:'#input-payment-zone',
        paymentAddressContinueButton:'#button-payment-address',
        paymentMethodAgreeCheckBox:'#collapse-payment-method input[name="agree"]',
        paymentMethodContinueButton:'#button-payment-method',
        confirmOrderButton:'#button-confirm'
    }

    static checkoutProduct(customer:Customer){
        this.enterBillingAddress(customer);
        cy.get(this.Selectors.paymentAddressContinueButton).click();
        cy.get(this.Selectors.paymentMethodAgreeCheckBox).click();
        cy.get(this.Selectors.paymentMethodContinueButton).click();
        cy.get(this.Selectors.confirmOrderButton).click();
    }

    static enterBillingAddress(customer:Customer){
        cy.setText(this.Selectors.billingFirstName,customer.firstName);
        cy.setText(this.Selectors.billingLastName,customer.lastName);
        cy.setText(this.Selectors.billingAddress1,TextUtil.sanitizeName(faker.address.streetAddress(true)));
        cy.setText(this.Selectors.billingCity,TextUtil.sanitizeName(faker.address.city()));
        cy.setText(this.Selectors.billingPostalCode,TextUtil.sanitizeName(faker.address.zipCode()));
        cy.get(this.Selectors.billingCountry).select('223');
        cy.get(this.Selectors.billingState).select('3616');
    }
}