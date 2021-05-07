export default () => {
    let app = new Vue({
      
      el: '#app',

      data: {
        catalogItems: [],
        cartItems: [],
        API: 'https://raw.githubusercontent.com/alexyasinsky/GB-web-1.3-static/main/JSONs/',
        catalogFilename: 'catalogData.json',
        cartFilename: 'cartData.json',
        cartShown: false,
      },

      methods: {
        getData(url) {
                return fetch(url)
                      .then(data => data.json());
              }
      },

      computed: {

      },

      mounted() {
        this.getData(this.API + this.catalogFilename).then(data => { 
                  this.catalogItems = data;
              });
        this.getData(this.API + this.cartFilename).then(data => { 
                  this.cartItems = data;
              });
      }

    });
}

