<template>
  <div class="hotproducts-container" :style="{ backgroundColor: color }">
    <h2 class="title">{{ title }}</h2>
    <div class="new-products">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  name: "News",
  components: { Product },
  props: ["products", "title", "color"],
};
</script>

<style lang="scss" scoped>
.hotproducts-container {
  height: 24rem;
  display: flex;
  flex-direction: column !important;

  .title {
    font-size: 0.95rem;
    text-align: left;
    margin: 1rem;
    letter-spacing: 2px;
    color: #063757;
    font-weight: 700;
    max-width: inherit;
  }
  .new-products {
    display: flex;
    flex-direction: row;
    overflow: scroll;
    margin: 0 1rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  @include media-xl {
    .title,
    .new-products {
      max-width: 80%;
      width: 80%;
      align-self: center;
    }
  }
}
</style>