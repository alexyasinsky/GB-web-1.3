'use strict';

import { CartItem, CatalogItem } from './items';

let API = 'https://raw.githubusercontent.com/alexyasinsky/GB-web-1.3-static/main/JSONs/'

let classes = {
    'Catalog': CatalogItem,
    'Cart': CartItem
}

export default class List {
  constructor(filename, container) {
    this.filename = filename;
    this.container = container;
    this.items = [];
    this._init();
  }

  _init() {
    let url = API + this.filename;
    this._getUrl(url).then(data => {
      this.items = data;
      console.log(this.items);
      this._render();
    });
    
    
  }

  _getUrl(url) {
    return fetch(url)
            .then(data => data.json());
  }

  _render() {
    let template = '';
        this.items.forEach(item => {
            template += new classes[this.constructor.name](item).render();
            // new Catalog()._render >> template += new classes['Catalog'](item).render()
            // new Basket()._render >> template += new classes['Basket'](item).render()
        });
        document.querySelector(this.container).insertAdjacentHTML('afterbegin', template);
    }
}