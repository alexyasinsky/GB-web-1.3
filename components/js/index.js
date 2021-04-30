import { Cart, Catalog } from './lists';

export default () => {
    let catalog = new Catalog('catalogData.json', '.product__box');
    let cart = new Cart('cartData.json', '.cartdrop__box')
}