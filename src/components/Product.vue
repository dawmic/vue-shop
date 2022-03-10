<template>
  <div class="product-container card-body mx-lg-3 mb-lg-4">
    <h2 class="p-title card-title mt-3 ml-3">{{ product.title }}</h2>
    <p class="p-description ml-3">{{ product.description }}</p>
    <img class="p-image" :src="product.image" alt="" />
    <p class="p-price mr-3">{{ product.price }}</p>
    <p class="p-rate mr-3 mb-3">
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
.product-container {
  height: 18rem;
  min-width: 10rem;
  width: 10rem;
  margin: 0.5rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
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
    text-align: left;
    margin: 0;
   
  }
  .p-description {
    width: 90%;
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: 700;
    line-height: 1.35;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .p-price,
  .p-rate {
    color: #063757;
    font-size: 1.12rem;
    font-weight: 700;
    align-self: flex-end;
    text-align: right;
    margin: 0;
  }
  .p-image {
    width: 80%;
    align-self: center;
    object-fit: contain;
  }
}

.productRate {
  color: orange;
}
@include media-md {
  .product-container {
    height: 26rem;
    min-width: 14.9rem;
    width: 14.9rem;
    .p-description {
      -webkit-line-clamp: 3;
    }
    .p-price {
      font-size: 1.3rem;
    }
  }
}
@include media-lg {
  .product-container {
    height: 24.75rem;
    min-width: 13.8rem;
    width: 13.8rem;
    .p-image {
      width: 70%;
    }
    .p-price {
      font-size: 1.5rem;
    }
  }
}
@include media-xl {
  .product-container {
    height: 26.75rem;
    min-width: 21.3rem;
    width: 21.3rem;
  }
}
</style>
