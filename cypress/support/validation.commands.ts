declare global{
    namespace Cypress{
        interface Chainable{
            verifyCurrentUrlEqual:(expected:string)=>void
        }
    }
}

export const verifyCurrentUrlEqual=(expected:string)=>{
    cy.url().should('equal',expected);
}