import {RequestTypeEnum} from "../../models/enums/request-type.enum";
import {RequestOptions} from "../../models/request-options";
import EnvUtil from "./env.util";

export default class ModelUtil{
    static getRequestOptions=(requestType:RequestTypeEnum,url:string,failOnStatusCode:boolean=true):RequestOptions=>{
        cy.task('log',"URL====>>>"+`${EnvUtil.getApiUrl()}${url}`);
        return{
            method:requestType,
            url:`${EnvUtil.getApiUrl()}${url}`,
            body:undefined,
            failOnStatusCode:failOnStatusCode
        }
    }
}