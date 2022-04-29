declare global{
    namespace Cypress{
        interface Chainable{
            testTearDown:()=>void
        }
    }
 }

 export const testTearDown=()=>{
   cy.logout();
 }