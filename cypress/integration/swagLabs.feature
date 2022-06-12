Feature: Swag Labs

    # Scenario: Finish the purchase when add two items in the cart and then remove one
    #     Given I perform the login
    #     And I add the items "Sauce Labs Backpack" and "Sauce Labs Bolt T-Shirt" in the cart
    #     When I open the cart
    #     And remove the "Sauce Labs Backpack" item
    #     And finish the purchase
    #     Then should shown message "Your order has been dispatched, and will arrive just as fast as the pony can get there!"

    Scenario: Sort products by name
        Given I perform the login
        When I sort products by name
        Then sorting by name should be performed successfully

    # Scenario: Sort products by price
    #     Given I perform the login
    #     When I sorte products by price
    #     Then sorting by price should be performed successfully

    # Scenario: Try perform login with locked out user
    #     Given I am in the login page
    #     When I perform a login with locked out user
    #     Then should shown message "Epic sadface: Sorry, this user has been locked out."