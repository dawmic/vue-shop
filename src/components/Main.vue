<template>
  <div class="main">
    <Header />
    <Categories />
    <div class="row slider-container p-0 m-0 align-items-center">
      <div class="col-12 p-0 m-0 col-md-8">
        <Slider />
      </div>
      <div
        class="banner-container col-12 mt-3 pb-2 col-md-4 mt-md-0 pb-md-0 p-0"
      >
        <div class="btn-slide">
          <img
            src="https://images.bike24.net/media/320/i/mb/fb/e4/7d/com-vertical-928x320-versandversprechen-07-2021-bike24-1088957.png"
            alt=""
          />
        </div>
        <div class="btn-slide">
          <img
            src="https://images.bike24.net/media/320/i/mb/d6/95/0f/com-vertical-928x320-heimtrainer-11-2021-bike24-1109429.jpg"
            alt=""
          />
        </div>
        <div class="btn-slide">
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
  display: flex;
  flex-direction: column;

  .slider-container {
    @include media-md {
      width: 95%;
      align-self: center;
    }
    @include media-xl {
      width: 90%;
    }
    .banner-container {
      display: flex;
      flex-direction: row;
      width: 100% !important;
      overflow: scroll;
      .btn-slide {
        flex: 1 0 auto;
        margin: 0.5rem;
        img {
          height: 82px;
          width: 240px;
          object-fit: contain;
        }
      }
      @include media-md {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        height: 16.5rem;
        .btn-slide {
          margin: 0;
          flex: 0 1 auto;
          width: 95%;
          height: 32%;
          img {
            height: 100% !important;
            width: 100% !important;
          }
        }
      }
      @include media-lg {
        height: 21.375rem;
      }
      @include media-xl{
        height: 24.6875rem;
      }
      @include media-xxl{
        height: 31.25rem;
      }
    }
  }
  .news-container {
    width: 100%;
    background: #f7f7f7;
  }
}
</style>
