import EnvUtil from "../helpers/utils/env.util";

declare global {
    namespace Cypress{
        interface Chainable{
            logout:()=>void
        }
    }
}

export const logout=()=>{
    cy.visit(Cypress.config().baseUrl+'/index.php?route=account/logout');
    cy.clearCookies();
    cy.clearLocalStorage();
}