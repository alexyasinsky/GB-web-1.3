'use strict';

import { CartItem, CatalogItem } from './items';

let listTypes = {
    'Catalog': CatalogItem,
    'Cart': CartItem
}

export default class List {
  constructor(filename, container) {
    this.filename = filename;
    this.container = container;
    this.items = [];
    this.API = 'https://raw.githubusercontent.com/alexyasinsky/GB-web-1.3-static/main/JSONs/'
    this._init();
  }

  _init() {
    let url = this.API + this.filename;
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
            template += new listTypes[this.constructor.name](item).render();
        });
        document.querySelector(this.container).insertAdjacentHTML('afterbegin', template);
    }
}