import Swiper, {Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import "@/shopify/snippets/variant-swatch";

const FeaturedProducts = {
  onLoad() {
    this.media = window.matchMedia(Shopify.theme.media.md);
    this._handleMediaChange(this.media);
    this.media.addEventListener("change", this._handleMediaChange.bind(this));
  },

  _handleMediaChange(mediaQuery) {
    if (mediaQuery.matches) {
      this._destroySlider();
    } else {
      this._init();
    }
  },

  _init() {
    if (this.slider) return;

    this.sliderWrapper = this.container.querySelector(".swiper");
    if (!this.sliderWrapper) return;

    this.slider = new Swiper(this.sliderWrapper, {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      modules: [Autoplay,Pagination],
      autoplay: false
    });
  },

  _destroySlider() {
    if (this.slider) {
      this.slider.destroy(true, true);
      this.slider = null;
    }
  },

};

export default FeaturedProducts;
