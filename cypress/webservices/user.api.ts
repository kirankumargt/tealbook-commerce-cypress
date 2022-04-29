import {Customer} from "../models/customer";
import ModelUtil from "../helpers/utils/model.util";
import {RequestTypeEnum} from "../models/enums/request-type.enum";
import RequestUtil from "../helpers/utils/request.util";
import * as cypress from "cypress";

export default class UserApi{

     static postUser(customer:Customer,failOnStatusCode:boolean=true,cookieMap:Map<string,string>):Cypress.Chainable<Cypress.Response<any>>{
        const url:string=`?route=account/register`;
        const requestOptions=ModelUtil.getRequestOptions(RequestTypeEnum.Post,url, failOnStatusCode);
         const data=new FormData();
         data.set("customer_group_id","1");
         data.set("firstname",customer.firstName);
         data.set("lastname",customer.lastName);
         data.set("email",customer.email);
         data.set("telephone",customer.telephone);
         data.set("password",customer.password);
         data.set("confirm",customer.passwordConfirm);
         data.set("newsletter","0");
         data.set("agree","1");
         cy.task('log',"VALUES===>\n"+customer.email);
         cy.task('log',"VALUES===>\n"+customer.password);

        requestOptions.body={
            data
        };
        return RequestUtil.requestBuilder(requestOptions,cookieMap);

    }
}