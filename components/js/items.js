'use strict';

import Item from './item';

export class CartItem extends Item {
    constructor(item) {
        super(item);
        this.quantity = 1;
    }

    render() {
      return `
      <div class="cartdrop__product" 
        data-id='${this.id}'
        data-name='${this.name}'
        data-price=${this.price}
        data-quantity='${this.quantity}'>
      <a href="single_page.html"><img
          src=${this.img}
          alt="product-${this.id}"></a>
      <div class="cartdrop__product-desc">
        <h4>${this.name}</h4>
        <p class="cartdrop__product-rate">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </p>
        <p class="cartdrop__product-pq">
          ${this.quantity} <span>x</span> $${this.price}
        </p>
      </div>
      <div class="cartdrop__product-cancel">
        <button type="button"><i class="fas fa-times-circle"></i></button>
      </div>
    </div>
      `
    }
}

export class CatalogItem extends Item {
  constructor(item) {
    super(item);
  }
  
  render() {
    return `<div class="product"
        data-id='${this.id}'
        data-name='${this.name}'
        data-price=${this.price}
        >
    <img src=${this.img} class="product__img" alt="product-${this.id}">
    <a href="single_page.html" class="product__name">${this.name}</a>
    <p class="product__price">$${this.price}</p>
    <a href="#" class="product__cart">
      <img src="assets/imgs/cart-white.png" alt="cart-white">
      <p>Add to Cart</p>
    </a>
  </div>
  `
  }
}