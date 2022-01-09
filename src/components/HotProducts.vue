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
display: flex;
  flex-direction: column !important;
  .title {
    font-size: 0.95rem;
    text-align: left;
    margin: 2rem 0 1rem 2rem;
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
      max-width: 90%;
      width: 90%;
      align-self: center;
    }
  }
}
</style>