import RegisterAccountPage from "../helpers/pages/my-account/register-account.page";

export default class Cookie{
    static getSessionCookie():Map<string,string>{
        let cookieMap:Map<string,string>=new Map<string,string>();
        cy.getCookies().then((cookies)=>{
            cookies.forEach((cookie)=>{
                cy.task('log',"\n====>>"+cookie.name);
                cy.task("log","\n====>>"+cookie.value);
            })
        });
        cy.getCookie("OCSESSID").then((cookie)=>{
            cookieMap.set("cookieName",cookie.name);
            cookieMap.set("cookieValue",cookie.value)
        });
        cy.task('log',"=====>"+cookieMap.get("cookieName"));
        cy.task('log',"====>>"+cookieMap.get("cookieValue"));
        return cookieMap;
    }
}