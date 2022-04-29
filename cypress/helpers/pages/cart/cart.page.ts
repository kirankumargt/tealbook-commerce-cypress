import {Product} from "../../../models/product";

export default class CartPage{
    static readonly url=Cypress.config().baseUrl+'/index.php?route=checkout/cart';
    private static readonly Selectors={
        cartProduct:'#checkout-cart .table-responsive .table > tbody > tr',
        cartProductName:'#checkout-cart .table-responsive .table > tbody > tr > td:nth-of-type(2) a',
        cartProductUnitPrice:'#checkout-cart .table-responsive .table > tbody > tr > td:nth-of-type(5)',
        checkoutButton:'#checkout-cart .clearfix .btn.btn-primary'
    }

    static loadCartPage(){
        cy.visit(this.url);
    }

    static verifyProductAddedToCart(){
        Cypress.log({displayName:'assert',message:[`verifyProductAddedToCart`]});
        cy.get(this.Selectors.cartProduct).should('be.visible');
    }

    static verifyProductDetails(){
        Cypress.log({displayName:'assert',message:[`verifyProductDetails`]});
        cy.get(this.Selectors.cartProductName).should('not.be.empty');
        cy.get(this.Selectors.cartProductUnitPrice).should('not.be.empty');
    }

    static clickCheckoutButton(){
        cy.get(this.Selectors.checkoutButton).click();
    }
}