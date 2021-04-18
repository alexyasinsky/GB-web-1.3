'use strict';

import Product from './product.js';

export default class ProductBox {
  constructor() {
    this.productList = [];
    this.productsEl = document.querySelector('.product__box');
  }

  createProducts(qty) {
    for (let i = 1; i <= qty; i++) {
      let product = new Product;
      product.id = i;
      product.img = `https://raw.githubusercontent.com/alexyasinsky/GB-web-1.3-static/main/product-${i}.png`;
      product.name = 'Mango People T-shirt';
      product.price = '$52.00';
      this.productList.push(product);
    }
  }

  renderProducts() {
    let productsMarkup = '';
    this.productList.forEach(product => {
      productsMarkup += this.getProductMarkup(product);
    });
    this.productsEl.innerHTML = productsMarkup;
  }

  getProductMarkup(product) {
    return `<div class="product">
    <img src="${product.img}" class="product__img" alt="product-${product.id}">
    <a href="single_page.html" class="product__name">${product.name}</a>
    <p class="product__price">${product.price}</p>
    <a href="#" class="product__cart">
      <img src="assets/imgs/cart-white.png" alt="cart-white">
      <p>Add to Cart</p>
    </a>
  </div>
  `
  }
}