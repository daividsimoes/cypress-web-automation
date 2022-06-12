import * as faker from 'faker';

export class FakerUtil {

    static generateRandomFirstName() {
        return faker.name.firstName();
    }

    static generateRandomLastName() {
        return faker.name.lastName();
    }

    static generateRandomPostalCode() {
        return faker.address.zipCode();
    }
}