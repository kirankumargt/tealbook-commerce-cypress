import {Customer} from "../../models/customer";
import TextUtil from "./text.util";
import faker from "@faker-js/faker";

export default class DataUtil{
    static generateRandomCustomerData=():Customer=>{
        let firstName=TextUtil.sanitizeName(faker.name.firstName());
        let lastname=TextUtil.sanitizeName(faker.name.lastName());
        let email=TextUtil.sanitizeName(faker.internet.email());
        let telephone=TextUtil.sanitizeName(faker.phone.phoneNumber());
        return {
            firstName:firstName,
            lastName:lastname,
            email:email,
            telephone:telephone,
            password:'Test@1234',
            passwordConfirm:'Test@1234'
        };
    };
}