import {RequestOptions} from "../../models/request-options";
import RegisterAccountPage from "../pages/my-account/register-account.page";
import Cookie from "../../webservices/cookie";
const axios = require('axios').default;

export default class RequestUtil{
    static requestBuilder(requestOptions:RequestOptions,cookieMap:Map<string,string>):Cypress.Chainable<Cypress.Response<any>>{
        return  cy.request({
            method:requestOptions.method,
            url:requestOptions.url,
            body:requestOptions.body,
            failOnStatusCode:requestOptions.failOnStatusCode,
            form:true,
            headers:{
                'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                'Cookie':cookieMap.get("cookieName").concat("=").concat(cookieMap.get("cookieValue").concat("; language=en-gb; currency=USD; __atuvc=1%7C17")),
                'Content-Type':"multipart/form-data; boundary=----WebKitFormBoundaryqVVLQ1zw2091N3if",
                'Sec-Fetch-Dest':'document',
                'Sec-Fetch-Mode':'navigate',
                'Sec-Fetch-Site':'same-origin',
                'Upgrade-Insecure-Requests':'1'
            }
        }).then((response)=>{
            Cypress.log({
                displayName:'response',
                message:[`${JSON.stringify(response)}`]
            });
            cy.task('log',"\nRESPONSE*****\n"+`${response.body}`+"\n*****");
        });
    };
}