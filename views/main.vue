<template>
  <div>
    <div class="wrapper">
      <header class=" header padding-site">
        <div class="header__leftbox">
          <div class="logo">
            <a href="index.html"
              ><img src="../assets/imgs/logo.png" alt="logo"
            /></a>
            <p>bran<span>d</span></p>
          </div>
          <details class="header__search-config">
            <summary>Browse</summary>
            <div class="menu__mega">
              <div class="menu__megacolumn">
                <ul class="menu__megabox">
                  <li>
                    <h3>Women</h3>
                  </li>
                  <li><a href="#">Dresses</a></li>
                  <li><a href="#">Tops</a></li>
                  <li><a href="#">Sweaters/Knits</a></li>
                  <li><a href="#">Jackets/Coats</a></li>
                  <li><a href="#">Blazers</a></li>
                  <li><a href="#">Denim</a></li>
                  <li><a href="#">Legging/Pants</a></li>
                  <li><a href="#">Skirts/Shorts</a></li>
                  <li><a href="#">Accessories</a></li>
                </ul>
                <ul class="menu__megabox">
                  <li>
                    <h3>Men</h3>
                  </li>
                  <li><a href="#">Tees/Tank tops</a></li>
                  <li><a href="#">Shirts/Polos</a></li>
                  <li><a href="#">Sweaters</a></li>
                  <li><a href="#">Sweatshirts/Hoodies</a></li>
                  <li><a href="#">Blazers</a></li>
                  <li><a href="#">Jackets/vest</a></li>
                </ul>
              </div>
            </div>
          </details>
          <form class="header__searchfield" action="#">
            <input type="search" id="search" placeholder="Search for Item..." />
            <button type="submit"><i class="fas fa-search"></i></button>
          </form>
        </div>
        <div class="header__rightbox">
          <div class="cartdrop">
            <a href="cart.html"
              ><img class="hover" src="../assets/imgs/cart.png" alt="cart"
            /></a>
            <!-- cartdrop__box -->
            <cart />
          </div>
          <button class="header__button button hover">
            My Account <i class="fas fa-caret-down"></i>
          </button>
        </div>
      </header>
      <nav class="menu padding-site">
        <div class="menu__linkblock menu__linkblock_nav">
          <a class="menu__link" href="index.html">Home</a>
        </div>
        <div class="menu__linkblock menu__linkblock_nav">
          <a class="menu__link" href="catalog.html">Men</a>
          <div class="menu__mega menu__mega_nav">
            <div class="menu__megacolumn">
              <ul class="menu__megabox">
                <li>
                  <h3>Women</h3>
                </li>
                <li><a href="#">Dresses</a></li>
                <li><a href="#">Tops</a></li>
                <li><a href="#">Sweaters/Knits</a></li>
                <li><a href="#">Jackets/Coats</a></li>
                <li><a href="#">Blazers</a></li>
                <li><a href="#">Denim</a></li>
                <li><a href="#">Legging/Pants</a></li>
                <li><a href="#">Skirts/Shorts</a></li>
                <li><a href="#">Accessories</a></li>
              </ul>
            </div>
            <div class="menu__megacolumn">
              <ul class="menu__megabox">
                <h3>Women</h3>
                <li><a href="#">Dresses</a></li>
                <li><a href="#">Tops</a></li>
                <li><a href="#">Sweaters/Knits</a></li>
                <li><a href="#">Jackets/Coats</a></li>
              </ul>
              <ul class="menu__megabox">
                <h3>Women</h3>
                <li><a href="#">Dresses</a></li>
                <li><a href="#">Tops</a></li>
                <li><a href="#">Sweaters/Knits</a></li>
              </ul>
            </div>
            <div class="menu__megacolumn">
              <ul class="menu__megabox">
                <h3>Women</h3>
                <li><a href="#">Dresses</a></li>
                <li><a href="#">Tops</a></li>
                <li><a href="#">Sweaters/Knits</a></li>
                <li><a href="#">Jackets/Coats</a></li>
              </ul>
              <img
                src="../assets/imgs/megamenu banner.png"
                alt="megamenu banner"
              />
            </div>
          </div>
        </div>
        <div class="menu__linkblock menu__linkblock_nav">
          <a class="menu__link" href="catalog.html">Women</a>
          <div class="menu__mega menu__mega_nav">
            <div class="menu__megacolumn">
              <ul class="menu__megabox">
                <li>
                  <h3>Women</h3>
                </li>
                <li><a>Dresses</a></li>
                <li><a>Tops</a></li>
                <li><a>Sweaters/Knits</a></li>
                <li><a>Jackets/Coats</a></li>
                <li><a>Blazers</a></li>
                <li><a>Denim</a></li>
                <li><a>Legging/Pants</a></li>
                <li><a>Skirts/Shorts</a></li>
                <li><a>Accessories</a></li>
              </ul>
            </div>
            <div class="menu__megacolumn">
              <div class="menu__megabox">
                <h3>Women</h3>
                <a>Dresses</a>
                <a>Tops</a>
                <a>Sweaters/Knits</a>
                <a>Jackets/Coats</a>
              </div>
              <div class="menu__megabox">
                <h3>Women</h3>
                <a>Dresses</a>
                <a>Tops</a>
                <a>Sweaters/Knits</a>
              </div>
            </div>
            <div class="menu__megacolumn">
              <div class="menu__megabox">
                <h3>Women</h3>
                <a>Dresses</a>
                <a>Tops</a>
                <a>Sweaters/Knits</a>
                <a>Jackets/Coats</a>
              </div>
              <img
                src="../assets/imgs/megamenu banner.png"
                alt="megamenu banner"
              />
            </div>
          </div>
        </div>
        <div class="menu__linkblock menu__linkblock_nav">
          <a class="menu__link" href="catalog.html">Kids</a>
          <div class="menu__mega menu__mega_nav menu__mega_middle">
            <div class="menu__megacolumn">
              <ul class="menu__megabox">
                <li>
                  <h3>Women</h3>
                </li>
                <li><a>Dresses</a></li>
                <li><a>Tops</a></li>
                <li><a>Sweaters/Knits</a></li>
                <li><a>Jackets/Coats</a></li>
                <li><a>Blazers</a></li>
                <li><a>Denim</a></li>
                <li><a>Legging/Pants</a></li>
                <li><a>Skirts/Shorts</a></li>
                <li><a>Accessories</a></li>
              </ul>
            </div>
            <div class="menu__megacolumn">
              <div class="menu__megabox">
                <h3>Women</h3>
                <a>Dresses</a>
                <a>Tops</a>
                <a>Sweaters/Knits</a>
                <a>Jackets/Coats</a>
              </div>
              <div class="menu__megabox">
                <h3>Women</h3>
                <a>Dresses</a>
                <a>Tops</a>
                <a>Sweaters/Knits</a>
              </div>
            </div>
            <div class="menu__megacolumn">
              <div class="menu__megabox">
                <h3>Women</h3>
                <a>Dresses</a>
                <a>Tops</a>
                <a>Sweaters/Knits</a>
                <a>Jackets/Coats</a>
              </div>
              <img
                src="../assets/imgs/megamenu banner.png"
                alt="megamenu banner"
              />
            </div>
          </div>
        </div>
        <div class="menu__linkblock menu__linkblock_nav">
          <a class="menu__link" href="catalog.html">Accessories</a>
          <div class="menu__mega menu__mega_nav menu__mega_middle">
            <div class="menu__megacolumn">
              <ul class="menu__megabox">
                <li>
                  <h3>Women</h3>
                </li>
                <li><a>Dresses</a></li>
                <li><a>Tops</a></li>
                <li><a>Sweaters/Knits</a></li>
                <li><a>Jackets/Coats</a></li>
                <li><a>Blazers</a></li>
                <li><a>Denim</a></li>
                <li><a>Legging/Pants</a></li>
                <li><a>Skirts/Shorts</a></li>
                <li><a>Accessories</a></li>
              </ul>
            </div>
            <div class="menu__megacolumn">
              <div class="menu__megabox">
                <h3>Women</h3>
                <a>Dresses</a>
                <a>Tops</a>
                <a>Sweaters/Knits</a>
                <a>Jackets/Coats</a>
              </div>
              <div class="menu__megabox">
                <h3>Women</h3>
                <a>Dresses</a>
                <a>Tops</a>
                <a>Sweaters/Knits</a>
              </div>
            </div>
            <div class="menu__megacolumn">
              <div class="menu__megabox">
                <h3>Women</h3>
                <a>Dresses</a>
                <a>Tops</a>
                <a>Sweaters/Knits</a>
                <a>Jackets/Coats</a>
              </div>
              <img
                src="../assets/imgs/megamenu banner.png"
                alt="megamenu banner"
              />
            </div>
          </div>
        </div>
        <div class="menu__linkblock menu__linkblock_nav">
          <a class="menu__link" href="catalog.html">Featured</a>
          <div class="menu__mega menu__mega_nav menu__mega_last">
            <div class="menu__megacolumn">
              <ul class="menu__megabox">
                <li>
                  <h3>Women</h3>
                </li>
                <li><a>Dresses</a></li>
                <li><a>Tops</a></li>
                <li><a>Sweaters/Knits</a></li>
                <li><a>Jackets/Coats</a></li>
                <li><a>Blazers</a></li>
                <li><a>Denim</a></li>
                <li><a>Legging/Pants</a></li>
                <li><a>Skirts/Shorts</a></li>
                <li><a>Accessories</a></li>
              </ul>
            </div>
            <div class="menu__megacolumn">
              <div class="menu__megabox">
                <h3>Women</h3>
                <a>Dresses</a>
                <a>Tops</a>
                <a>Sweaters/Knits</a>
                <a>Jackets/Coats</a>
              </div>
              <div class="menu__megabox">
                <h3>Women</h3>
                <a>Dresses</a>
                <a>Tops</a>
                <a>Sweaters/Knits</a>
              </div>
            </div>
            <div class="menu__megacolumn">
              <div class="menu__megabox">
                <h3>Women</h3>
                <a>Dresses</a>
                <a>Tops</a>
                <a>Sweaters/Knits</a>
                <a>Jackets/Coats</a>
              </div>
              <img
                src="../assets/imgs/megamenu banner.png"
                alt="megamenu banner"
              />
            </div>
          </div>
        </div>
        <div class="menu__linkblock menu__linkblock_nav">
          <a class="menu__link" href="catalog.html">Hot Deals</a>
          <div class="menu__mega menu__mega_nav menu__mega_last">
            <div class="menu__megacolumn">
              <ul class="menu__megabox">
                <li>
                  <h3>Women</h3>
                </li>
                <li><a>Dresses</a></li>
                <li><a>Tops</a></li>
                <li><a>Sweaters/Knits</a></li>
                <li><a>Jackets/Coats</a></li>
                <li><a>Blazers</a></li>
                <li><a>Denim</a></li>
                <li><a>Legging/Pants</a></li>
                <li><a>Skirts/Shorts</a></li>
                <li><a>Accessories</a></li>
              </ul>
            </div>
            <div class="menu__megacolumn">
              <div class="menu__megabox">
                <h3>Women</h3>
                <a>Dresses</a>
                <a>Tops</a>
                <a>Sweaters/Knits</a>
                <a>Jackets/Coats</a>
              </div>
              <div class="menu__megabox">
                <h3>Women</h3>
                <a>Dresses</a>
                <a>Tops</a>
                <a>Sweaters/Knits</a>
              </div>
            </div>
            <div class="menu__megacolumn">
              <div class="menu__megabox">
                <h3>Women</h3>
                <a>Dresses</a>
                <a>Tops</a>
                <a>Sweaters/Knits</a>
                <a>Jackets/Coats</a>
              </div>
              <img
                src="../assets/imgs/megamenu banner.png"
                alt="megamenu banner"
              />
            </div>
          </div>
        </div>
      </nav>
      <section class="banner padding-site">
        <div class="banner__text">
          <h1>THE BRAND</h1>
          <p>OF LUXERIOUS <span>FASHION</span></p>
        </div>
      </section>
      <section class="category__section padding-site">
        <div class="category__column">
          <a href="catalog.html">
            <div class="category category_men">
              <div class="category__text">
                <h3>Hot deal</h3>
                <h2>For men</h2>
              </div>
            </div>
          </a>
          <a href="catalog.html">
            <div class="category category_accessories">
              <div class="category__text">
                <h3>Luxurious & Trendy</h3>
                <h2>Accessories</h2>
              </div>
            </div>
          </a>
        </div>
        <div class="category__column">
          <a href="catalog.html">
            <div class="category category_women">
              <div class="category__text">
                <h3>30% Offer</h3>
                <h2>Women</h2>
              </div>
            </div>
          </a>
          <a href="catalog.html">
            <div class="category category_kids">
              <div class="category__text">
                <h3>New arrivals</h3>
                <h2>For Kids</h2>
              </div>
            </div>
          </a>
        </div>
      </section>
      <section class="product__section padding-site">
        <h2>Fetured Items</h2>
        <h3>Shop for items based on what we featured in this week</h3>
        <!-- product__box -->
        <catalog/>
        <button
          onClick="location.href='catalog.html'"
          class="product__button hover"
        >
          Browse All Product <i class="fas fa-long-arrow-alt-right"></i>
        </button>
      </section>
      <section class="feature__section feature__section_index padding-site">
        <div class="feature__left">
          <h2>30% <span>Offer</span></h2>
          <h3>FOR WOMEN</h3>
        </div>
        <div class="feature__right">
          <figure class="feature__figure_index">
            <div class="feature__img feature__img_index">
              <img src="../assets/imgs/truck.png" alt="truck" />
            </div>
            <figcaption class="feature__desc feature__desc_index">
              <h4>Free Delivery</h4>
              <p>
                Worldwide delivery on all. Authorit tively morph next-generation
                innov tion with extensive models.
              </p>
            </figcaption>
          </figure>
          <figure class="feature__figure_index">
            <div class="feature__img feature__img_index">
              <img src="../assets/imgs/discount.png" alt="discount" />
            </div>
            <figcaption class="feature__desc feature__desc_index">
              <h4>Sales & discounts</h4>
              <p>
                Worldwide delivery on all. Authorit tively morph next-generation
                innov tion with extensive models.
              </p>
            </figcaption>
          </figure>
          <figure class="feature__figure_index">
            <div class="feature__img feature__img_index">
              <img src="../assets/imgs/crown.png" alt="crown" />
            </div>
            <figcaption class="feature__desc feature__desc_index">
              <h4>Quality assurance</h4>
              <p>
                Worldwide delivery on all. Authorit tively morph next-generation
                innov tion with extensive models.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>
      <section class="subscribe__section padding-site">
        <div class="subscribe-carousel">
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators subscribe-carousel__pagiblock">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active hover"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                class="hover"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                class="hover"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <figure class="subscribe-carousel__slide">
                  <img src="../assets/imgs/avatar.png" alt="avatar" />
                  <figcaption class="subscribe-carousel__content">
                    <p class="subscribe-carousel__quote">
                      “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                      pulvinar purus condimentum a. Aliquam condimentum mattis
                      neque sed pretium”
                    </p>
                    <p class="subscribe-carousel__author">
                      Bin Burhan
                    </p>
                    <p class="subscribe-carousel__location">
                      Dhaka, Bd
                    </p>
                  </figcaption>
                </figure>
              </div>
              <div class="carousel-item">
                <figure class="subscribe-carousel__slide">
                  <img src="../assets/imgs/avatar.png" alt="avatar" />
                  <figcaption class="subscribe-carousel__content">
                    <p class="subscribe-carousel__quote">
                      “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                      pulvinar purus condimentum a. Aliquam condimentum mattis
                      neque sed pretium”
                    </p>
                    <p class="subscribe-carousel__author">
                      Bin Burhan
                    </p>
                    <p class="subscribe-carousel__location">
                      Dhaka, Bd
                    </p>
                  </figcaption>
                </figure>
              </div>
              <div class="carousel-item">
                <figure class="subscribe-carousel__slide">
                  <img src="../assets/imgs/avatar.png" alt="avatar" />
                  <figcaption class="subscribe-carousel__content">
                    <p class="subscribe-carousel__quote">
                      “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                      pulvinar purus condimentum a. Aliquam condimentum mattis
                      neque sed pretium”
                    </p>
                    <p class="subscribe-carousel__author">
                      Bin Burhan
                    </p>
                    <p class="subscribe-carousel__location">
                      Dhaka, Bd
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div class="subscribe__form">
          <h2>subscribe</h2>
          <h3>FOR OUR NEWLETTER AND PROMOTION</h3>
          <form action="#">
            <input
              type="email"
              id="subscribe__email"
              placeholder="Enter Your Email"
            />
            <button type="submit" class="hover">Subscribe</button>
          </form>
        </div>
      </section>
      <div class="clr"></div>
    </div>
    <footer>
      <nav class="f-link__section padding-site">
        <div class="f-link__left">
          <div class="logo">
            <a href="index.html"
              ><img src="../assets/imgs/logo.png" alt="logo"
            /></a>
            <p>bran<span>d</span></p>
          </div>
          <p class="f-link__desc">
            Objectively transition extensive data rather than cross functional
            solutions. Monotonectally syndicate multidisciplinary materials
            before go forward benefits. Intrinsicly syndicate an expanded array
            of processes and cross-unit partnerships.
          </p>
          <p class="f-link__desc">
            Efficiently plagiarize 24/365 action items and focused
            infomediaries. Distinctively seize superior initiatives for wireless
            technologies. Dynamically optimize.
          </p>
        </div>
        <div class="f-link__right">
          <div class="f-link__column">
            <h3>Company</h3>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="f-link__column">
            <h3>Information</h3>
            <ul>
              <li><a href="#">Tearms & Condition</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">How to Buy</a></li>
              <li><a href="#">How to Sell</a></li>
              <li><a href="#">Promotion</a></li>
            </ul>
          </div>
          <div class="f-link__column">
            <h3>Shop Category</h3>
            <ul>
              <li><a href="catalog.html">Men</a></li>
              <li><a href="catalog.html">Women</a></li>
              <li><a href="catalog.html">Child</a></li>
              <li><a href="catalog.html">Apparel</a></li>
              <li><a href="catalog.html">Brows All</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <section class="copyright padding-site">
        <div class="copyright__leftbox">
          <p>&copy; 2017 Brand All Rights Reserved.</p>
        </div>
        <div class="copyright__rightbox">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-pinterest-p"></i></a>
          <a href="#"><i class="fab fa-google-plus-g"></i></a>
        </div>
      </section>
    </footer>
  </div>
</template>

<script>
import catalog from '../components/catalog.vue';
import cart from '../components/cart.vue';

export default {
  components: {
    'catalog': catalog, // полная запись объявления компонента
    cart, // краткая запись объявления компонента
  },

  // data() {
  //   return {
      
  //   }
  // },

  methods: {
    parentGetData(url) {  // можно методы сохранять в родительском компоненте. Обращаемся к нему в cart,vue
     return fetch(url).then(data => data.json());
    }
  }
}
</script>

<style></style>
