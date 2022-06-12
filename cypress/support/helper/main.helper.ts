export class MainHelper {

    static normalizeAddCartId(itemName: string) {
        return itemName.toLowerCase().replaceAll(' ', '-');
    }
}