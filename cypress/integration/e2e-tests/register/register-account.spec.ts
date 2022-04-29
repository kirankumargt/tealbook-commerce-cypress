import {Customer} from "../../../models/customer";
import DataUtil from "../../../helpers/utils/data.util";
import RegisterAccountPage from "../../../helpers/pages/my-account/register-account.page";
import RegisterSuccessPage from "../../../helpers/pages/my-account/register-success.page";
import MyAccountPage from "../../../helpers/pages/my-account/my-account.page";
import LoginPage from "../../../helpers/pages/login/login.page";

describe('Register Account',()=>{
    describe('Registration positive test',()=>{
        context('when entering valid information',()=>{
            let customer:Customer=DataUtil.generateRandomCustomerData();
            before(()=>{
                RegisterAccountPage.load();
                RegisterAccountPage.enterRegistrationForm(customer);
            });

            after(()=>{
                cy.testTearDown();
            });

            it('should display success message and navigate to the account creation success page',()=>{
                RegisterSuccessPage.verifyRegistrationGreetingMessage('Thank you for registering with Your Store!');
                cy.verifyCurrentUrlEqual(RegisterSuccessPage.url.replace("https","http"));
            });

            it('should navigate to the my account page on clicking continue button on account creation success page',()=>{
                RegisterSuccessPage.clickOnContinueButton();
                cy.verifyCurrentUrlEqual(LoginPage.url);
                LoginPage.login(customer);
                cy.verifyCurrentUrlEqual(MyAccountPage.url);
                MyAccountPage.verifyMyAccountContentIsLoaded();
            });
        });
    });
});