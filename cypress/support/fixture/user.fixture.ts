import { UserModel } from "../model/user.model";
import { FakerUtil } from "../util/faker.util";

export class UserFixture {

    generateData() {
        return {
            firstName: FakerUtil.generateRandomFirstName(),
            lastName: FakerUtil.generateRandomLastName(),
            zipCode: FakerUtil.generateRandomPostalCode()
        } as UserModel;
    }    
}