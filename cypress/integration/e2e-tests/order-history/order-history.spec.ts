import {Customer} from "../../../models/customer";
import DataUtil from "../../../helpers/utils/data.util";
import RegisterAccountPage from "../../../helpers/pages/my-account/register-account.page";
import LoginPage from "../../../helpers/pages/login/login.page";
import HeaderComponents from "../../../helpers/components/header.components";
import SearchPage from "../../../helpers/pages/search.page";
import CartPage from "../../../helpers/pages/cart/cart.page";
import {Product} from "../../../models/product";
import CheckoutPage from "../../../helpers/pages/checkout/checkout.page";
import CheckoutSuccessPage from "../../../helpers/pages/checkout/checkout-success.page";
import OrderHistoryPage from "../../../helpers/pages/order-history.page";
import HomePage from "../../../helpers/pages/home.page";

describe('Order History',()=>{
    describe('Place order success',()=>{
        context('When user search product and place order successfully',()=>{
            const searchText:string="MacBook";
            const expectedOrderPlacedMessage="Your order has been placed!";
            let customer:Customer=DataUtil.generateRandomCustomerData();
            let product:Product;
            before(  ()=>{
                RegisterAccountPage.load();
                RegisterAccountPage.enterRegistrationForm(customer);
                LoginPage.login(customer);
                // HomePage.loadHomePage();
            });

            /*after(()=>{
                cy.testTearDown();
            });*/
            it('should display ordered product in order history',()=>{
                HeaderComponents.performSearch(searchText);
                SearchPage.verifyHeading(searchText);
                SearchPage.verifySearchProductLoaded();
                SearchPage.addSearchProductToCart("1");
                CartPage.loadCartPage();
                CartPage.verifyProductAddedToCart();
                  CartPage.verifyProductDetails();
                 CartPage.clickCheckoutButton();
                 CheckoutPage.checkoutProduct(customer);
                 CheckoutSuccessPage.verifyOrderPlacedHeading(expectedOrderPlacedMessage);
                 CheckoutSuccessPage.clickContinueButton();
                OrderHistoryPage.loadOrderHistoryPage();
                OrderHistoryPage.verifyOrderHistoryTableDisplayed();
                OrderHistoryPage.verifyOrderHistoryDetails(customer);
            });
        });
    });
});