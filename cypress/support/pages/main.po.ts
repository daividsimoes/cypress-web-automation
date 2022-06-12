import { MainElements } from "../elements/main.elements";
import { SortType } from "../enum/sortType.enum";
import { MainHelper } from "../helper/main.helper";

export class MainPageObjects {

    waitMainPageLoad() {
        cy.contains(MainElements.title, MainElements.products).should('exist');
    }

    saveItemPrice(itemName: string) {
        cy.contains(MainElements.itemName, itemName).siblings().then(el => {
            const element = el.find(MainElements.itemPrice).text();
            cy.wrap(element).as(itemName);
        })
    }

    addItemToCartByName(itemName: string) {
        cy.contains(MainElements.itemName, itemName).siblings()
            .get(MainElements.addToCard(MainHelper.normalizeAddCartId(itemName))).click();
    }

    openShoppingCart() {
        cy.get(MainElements.shoppingCart).click();
    }

    sortProductsBy(by: SortType) {
        cy.get(MainElements.sort).select(by);
    }

    getItemList() {
        return cy.get(MainElements.itemList).children();
    }
}