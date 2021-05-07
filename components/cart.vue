<template>
  <div class="cartdrop__box">
    <item 
      v-for='item in items' 
      type='cart' 
      :item="item" 
      :key='item.id'
    />
    <div class="cartdrop__total">
      <p>Total</p>
      <p>$500.00</p>
    </div>
    <button class="cartdrop__button cartdrop__button_red hover">
      Checkout
    </button>
    <button class="cartdrop__button hover">Go to cart</button>
  </div>
</template>

<script>
import item from './item.vue';


export default {
  components: {
    item, 
  },

  data() {
    return {
      url: 'https://raw.githubusercontent.com/alexyasinsky/GB-web-1.3-static/main/JSON/cartData.json',
      items: [],
    }
  },

  mounted() {
    this.$parent.parentGetData(this.url)
    .then(d => { // обращение к методу из родительского компонента
      this.items = d;
      console.log(this.items);
      });
  }
};
</script>

<style></style>
