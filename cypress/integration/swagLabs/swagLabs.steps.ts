import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { MainElements } from '../../support/elements/main.elements';
import { SortType } from '../../support/enum/sortType.enum';
import { CartPageObjects } from '../../support/pages/cart.po';
import { LoginPageObjects } from '../../support/pages/login.po';
import { MainPageObjects } from '../../support/pages/main.po';

const loginPageObjects = new LoginPageObjects();
const mainPageObjects = new MainPageObjects();
const cartPageObjects = new CartPageObjects();

let itemOne: string;
let itemTwo: string;

Given('I perform the login', () => {
    loginPageObjects.openLoginPage();
    loginPageObjects.doLogin(Cypress.env('standard_user'), Cypress.env('password'));
})

Given('I add the items {string} and {string} in the cart', (firstItem: string, secondItem: string) => {
    itemOne = firstItem;
    itemTwo = secondItem;
    mainPageObjects.saveItemPrice(itemOne);
    mainPageObjects.saveItemPrice(itemTwo);

    mainPageObjects.addItemToCartByName(firstItem);
    mainPageObjects.addItemToCartByName(secondItem);
    cy.get(MainElements.shoppingCart).should('have.text', 2);
})

When('I open the cart', () => {
    mainPageObjects.openShoppingCart();
    cartPageObjects.waitCartPageLoad();
})

When('remove the {string} item', (item: string) => {
    cartPageObjects.removeItemFromCartByName(item);
    cy.get(MainElements.shoppingCart).should('have.text', 1);
})

When('finish the purchase', () => {
    cartPageObjects.clickCheckout();
    cartPageObjects.fillForm();
    cartPageObjects.clickContinue();
    cartPageObjects.checkOverview(itemTwo, itemOne);
    cartPageObjects.clickFinish();
})

When('I sort products by name', () => {
    mainPageObjects.sortProductsBy(SortType.ZA);
})

Then('should shown message {string}', (text: string) => {
    cartPageObjects.getOrderMessage().should('have.text', text);
})

Then('sorting by name should be performed successfully', () => {
    mainPageObjects.getItemList().each(($el, index, $list) => {
        
    })
})