import {Customer} from "../../../models/customer";
import DataUtil from "../../../helpers/utils/data.util";
import LoginPage from "../../../helpers/pages/login/login.page";
import RegisterAccountPage from "../../../helpers/pages/my-account/register-account.page";
import MyAccountPage from "../../../helpers/pages/my-account/my-account.page";

describe('Login',()=>{
    describe('Login positive test',()=>{
        context('when enter valid information',()=>{
            let customer:Customer=DataUtil.generateRandomCustomerData();
            before(  ()=>{
                RegisterAccountPage.load();
                RegisterAccountPage.enterRegistrationForm(customer);
                LoginPage.login(customer);
            });

            after(()=>{
                cy.testTearDown();
            });

            it('should login successfully and land on my account dashboard',()=>{
                MyAccountPage.verifyMyAccountContentIsLoaded();
            });
        });
    });
});