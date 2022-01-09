<template>
  <div class="main">
    <Header />
    <Categories />
    <div class="row">
      <div class="col-12 col-md-7 ml-md-3 ml-lg-5">
        <Slider />
      </div>
      <div class="col-12 col-md-3">
        <div class="btn-slide d-inline-block">
          <img
            src="https://images.bike24.net/media/320/i/mb/fb/e4/7d/com-vertical-928x320-versandversprechen-07-2021-bike24-1088957.png"
            alt=""
          />
        </div>
        <div class="btn-slide d-inline-block">
          <img
            src="https://images.bike24.net/media/320/i/mb/d6/95/0f/com-vertical-928x320-heimtrainer-11-2021-bike24-1109429.jpg"
            alt=""
          />
        </div>
        <div class="btn-slide d-inline-block">
          <img
            src="https://images.bike24.net/media/320/i/mb/be/1f/a4/com-vertical-928x320-hiviz-10-2021-bike24-1099213.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="news-container">
      <HotProducts
        title="NEWS & HIGHLIGHTS"
        color="#F7F7F7"
        :products="products"
      />
      <HotProducts title="SALE" color="#FFFFFF" :products="products" />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Categories from "../components/Categories.vue";
import HotProducts from "../components/HotProducts.vue";
import Slider from "../components/Slider.vue";

export default {
  name: "Main",
  components: { Header, Categories, HotProducts, Slider },
  props: ["products"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main {
  .news-container {
    height: 24rem;
    width: 100%;
    background: #f7f7f7;
  }
}
.btn-slide {
  //margin: 0.5rem;
  overflow-x: scroll;
}
@include media-xl {
  .row {
    margin-left: 1rem;
  }
}
</style>