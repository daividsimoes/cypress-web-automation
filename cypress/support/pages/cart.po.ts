import { CartElements } from "../elements/cart.elements";
import { MainElements } from "../elements/main.elements";
import { UserFixture } from "../fixture/user.fixture";
import { MainHelper } from "../helper/main.helper";
import { UserModel } from "../model/user.model";

const userFixture = new UserFixture();

export class CartPageObjects {

    waitCartPageLoad() {
        cy.contains(MainElements.title, CartElements.yourCart).should('exist');
    }

    removeItemFromCartByName(itemName: string) {
        cy.contains(CartElements.itemName, itemName).get(CartElements.removeFromCart(
            MainHelper.normalizeAddCartId(itemName))).click();
    }

    clickCheckout() {
        cy.get(CartElements.button(CartElements.checkout)).click();
        cy.contains(MainElements.title, CartElements.yourInformation).should('exist');
    }

    fillForm() {
        const user: UserModel = userFixture.generateData();
        cy.get(CartElements.checkoutConfirmationInput(CartElements.firstName)).type(user.firstName);
        cy.get(CartElements.checkoutConfirmationInput(CartElements.lastName)).type(user.lastName);
        cy.get(CartElements.checkoutConfirmationInput(CartElements.postalCode)).type(user.zipCode);
    }

    clickContinue() {
        cy.get(CartElements.checkoutConfirmationInput(CartElements.continue)).click();
        cy.contains(MainElements.title, CartElements.overview).should('exist');
    }

    checkOverview(containItem: string, notContainItem: string) {
        cy.get(CartElements.itemName).should('not.contain.text', notContainItem);
        cy.get(CartElements.itemName).should('contain.text', containItem);
        cy.get(CartElements.subTotalItem).then($total => {
            cy.get(`@${containItem}`).then($price => {
                expect($total.text()).to.contain(String($price));
            })
        })
    }

    clickFinish() {
        cy.get(CartElements.button(CartElements.finish)).click();
        cy.contains(MainElements.title, CartElements.complete).should('exist');
    }

    getOrderMessage() {
        return cy.get(CartElements.orderMessage);
    }
}