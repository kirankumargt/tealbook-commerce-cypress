import {RequestTypeEnum} from "./enums/request-type.enum";

export interface RequestOptions{
    method:RequestTypeEnum;
    url:string;
    body:Cypress.RequestBody | undefined;
    failOnStatusCode:boolean;
}