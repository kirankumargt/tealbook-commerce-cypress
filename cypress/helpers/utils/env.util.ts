export default class EnvUtil{
    static getDefaultPassword=():string=>{
        return Cypress.env('defaultPassword');
    }

    static getApiUrl=():string=>{
        return Cypress.env('apiUrl');
    }
}