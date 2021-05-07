<template>
  <div>
    <template v-if="type == 'cart'">
      <div class="cartdrop__product">
        <a href="single_page.html">
          <img :src="item.img" :alt="'product-' + item.id" />
        </a>
        <div class="cartdrop__product-desc">
          <h4>{{ item.name }}</h4>
          <p class="cartdrop__product-rate">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </p>
          <p class="cartdrop__product-pq">
            {{ item.quantity }} <span>x</span> ${{ item.price }}
          </p>
        </div>
        <div class="cartdrop__product-cancel">
          <button type="button">
            <i class="fas fa-times-circle"></i>
          </button>
        </div>
      </div>
    </template>
    <template v-if="type == 'catalog'">
      <div class="product">
        <img :src="item.img" class="product__img" :alt="'product-' + item.id" />
        <a href="single_page.html" class="product__name">{{ item.name }}</a>
        <p class="product__price">${{ item.price }}</p>
        <a href="#" class="product__cart">
          <img src="../assets/imgs/cart-white.png" alt="cart-white" />
          <p>Add to Cart</p>
        </a>
      </div>
    </template>
  </div>
</template>

<script>
export default {

   props: {
        type: {
            type: String,
            default: 'catalog'
        },
        item: { type: Object }
    }
};
</script>

<style></style>
