export class CartElements {

    static itemName = '.cart_item_label';
    static subTotalItem = '.summary_subtotal_label';
    static orderMessage = '.complete-text';
    static removeFromCart = (itemName: string) => `#remove-${itemName}`;

    //title
    static yourCart = 'Your Cart';
    static yourInformation = 'Checkout: Your Information';
    static overview = 'Checkout: Overview';
    static complete = 'Checkout: Complete!';
    
    //form
    static checkoutConfirmationInput = (name) => `input[data-test="${name}"]`;
    static firstName = 'firstName';
    static lastName = 'lastName';
    static postalCode = 'postalCode';
    static continue = 'continue';
    
    //button
    static button = (buttonName) => `button[name="${buttonName}"]`;
    static checkout = 'checkout';
    static finish = 'finish';
}