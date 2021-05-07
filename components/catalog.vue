<template>
  <div class="product__box">
    <item 
      v-for='item in items' 
      type='catalog' 
      :item='item' 
      :key='item.id'
    />
  </div>
</template>

<script>
import item from './item.vue';
import { getData } from '../utils/reqs.js'


export default {
  components: {
    item, 
  },

  data() {
    return {
      url: 'https://raw.githubusercontent.com/alexyasinsky/GB-web-1.3-static/main/JSON/catalogData.json',
      items: [],
    }
  },

  mounted() {
    getData(this.url).then(d => {
      this.items = d;
      console.log(this.items);
      });
  }
};
</script>

<style></style>
