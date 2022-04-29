declare global{
    namespace Cypress {
        interface Chainable{
            setText:(selector:any,text:string) => void
        }
    }
}

export const setText=(selector:any,text:string)=>{
    if(text!=''){
        cy.get(selector)
            .clear()
            .type(text);
    }else{
        cy.get(selector)
            .clear()
            .focus()
            .blur();
    }
}
