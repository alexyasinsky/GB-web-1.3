
import ProductBox from './productBox.js';

export default () => {
  let productBox = new ProductBox;
  productBox.createProducts(8);
  productBox.renderProducts();
}
