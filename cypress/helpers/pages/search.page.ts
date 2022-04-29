import {Product} from "../../models/product";

export default class SearchPage{

    private static readonly Selectors={
        headingField:'#content > h1',
        firstSearchProductAddToCartButton:'.product-layout:nth-of-type(1) .fa-shopping-cart'
    }

    static verifyHeading(searchText:string):void{
        Cypress.log({displayName:'assert',message:[`verifyHeading`]});
        cy.get(this.Selectors.headingField).should('contain.text',searchText);
    }

    static verifySearchProductLoaded(){
        Cypress.log({displayName:'assert',message:[`verifySearchProductLoaded`]});
        cy.get(this.Selectors.firstSearchProductAddToCartButton).should('be.visible');
    }

    static addSearchProductToCart=(productNumber:string):Product=>{
        let productName:string;
        let productPrice:number;
        cy.get('.product-layout:nth-of-type('+productNumber+') h4 > a',{timeout:15000}).invoke('text').then((nameText)=>{
            productName=nameText.trim();
        });
        cy.get('.product-layout:nth-of-type('+productNumber+') .price',{timeout:15000}).invoke('text').then((priceText)=>{
            let price:string=priceText.trim().split("Ex")[0].replace("$","");
            productPrice=parseInt(price);
        });
        cy.get(".product-layout:nth-of-type("+productNumber+") .fa-shopping-cart").click();
        return {
            name:productName,
            price:productPrice
        };
    }
}