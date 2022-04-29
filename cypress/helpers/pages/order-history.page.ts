import {Customer} from "../../models/customer";
import {Product} from "../../models/product";

export default class OrderHistoryPage{
    static readonly url=Cypress.config().baseUrl+'/index.php?route=account/order';
    private static readonly Selectors={
        orderHistoryTable:'.table-responsive',
        orderId:'.table-responsive tbody > tr > td:nth-of-type(1)',
        customerName:'.table-responsive tbody > tr > td:nth-of-type(2)',
        orderTotal:'.table-responsive tbody > tr > td:nth-of-type(5)'
    }

    static loadOrderHistoryPage():void{
        cy.visit(this.url);
    }

    static verifyOrderHistoryTableDisplayed(){
        Cypress.log({displayName:'assert',message:[`verifyOrderHistoryTableDisplayed`]});
        cy.get(this.Selectors.orderHistoryTable).should('be.visible');
    }

    static verifyOrderHistoryDetails(customer:Customer){
        Cypress.log({displayName:'assert',message:[`verifyOrderHistoryDetails`]});
        cy.get(this.Selectors.orderId).should('not.be.empty');
        cy.get(this.Selectors.customerName).should('contain.text',customer.firstName.concat(" ").concat(customer.lastName));
        cy.get(this.Selectors.orderTotal).should('not.be.empty');
    }
}