<template>
  <div class="product card-body mx-lg-3 mb-lg-4">
    <h2 class="p-title card-title">{{ product.title }}</h2>
    <img :src="product.image" alt="" />
    <p class="p-price">{{ product.price }}</p>
    <p class="p-rate">
      Rate
      <span
        v-for="n in 5"
        v-bind:key="n"
        v-bind:class="{ productRate: checkRating(n, product) }"
        >☆</span
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["product"],
  data() {
    return {};
  },
  methods: {
    checkRating(n, product) {
      return product.rating - n >= 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  height: 18rem;
  min-width: 10rem;
  width: 10rem;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid lightgray;
  background-color: #ffffff;
  transition: 0.2s;
  &:hover {
    -webkit-box-shadow: 0.5px 0.5px 12px 1px rgba(66, 68, 90, 0.3);
    -moz-box-shadow: 0.5px 0.5px 12px 1px rgba(66, 68, 90, 0.3);
    box-shadow: 0.5px 0.5px 12px 1px rgba(66, 68, 90, 0.3);
  }

  .p-title,
  .p-description {
    color: #063757;
    font-size: 1rem;
  }
  .p-price,
  .p-rate {
    color: #063757;
    font-size: 1.12rem;
    font-weight: 700;
  }
}

.productRate {
  color: orange;
}
@include media-md {
  .product {
    height: 26rem;
    min-width: 14.9rem;
    width: 14.9rem;
    .p-price {
      font-size: 1.3rem;
    }
  }
}
@include media-lg {
  .product {
    height: 24.75rem;
    min-width: 13.8rem;
    width: 13.8rem;
    .p-price {
      font-size: 1.5rem;
    }
  }
}
@include media-xl {
  .product {
    height: 26.75rem;
    min-width: 21.3rem;
    width: 21.3rem;
  }
}


</style>