<template>
  <div class="product-details-container no-gutters">
    <Header />
    <Categories />
    <div class="row p-0 m-0">
      <div class="image-details-container col-12 p-0 m-0">
        <h3 class="product-details-title text-left ml-4 mr-4">
          {{ product.description }}
        </h3>
        <img class="image-details" :src="product.image" alt="product image" />
      </div>
      <div class="information-container col-12 p-0 m-0">
        <h2 class="information-product-header d-none">
          {{ product.description }}
        </h2>
        <p class="information-product-price ml-4">{{ product.price }}</p>
        <div class="delivery-message ml-4 mb-2">
          <span class="product-stock">Still 1 in stock</span>
        </div>
        <div class="delivery-message ml-4 mb-2">
          <span class="product-ship"
            >Ships immediately - Delivery time to Poland 3-6 days</span
          >
        </div>
        <div class="add-to-cart-container col-12">
          <div class="quantity-container">
            <img
              class="quantity-icon"
              @click="removeOneProduct"
              src="@/assets/quantity/minus-line.svg"
              alt="one less product"
            /><input
              v-model.number="count"
              type="number"
              min="1"
              max="999"
              pattern="[0-9]*"
            />
            <img
              class="quantity-icon"
              @click="addOneProduct"
              src="@/assets/quantity/plus-line.svg"
              alt="one more product"
            />
          </div>
          <button class="add-to-cart-button">ADD TO CART</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Categories from "./Categories.vue";
export default {
  name: "ProductDetails",
  components: { Header, Categories },
  props: ["product"],
  data() {
    return {
      count: 1,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    console.log(this.product);
  },
  methods: {
    addOneProduct() {
      this.count++;
    },
    removeOneProduct() {
      this.count--;
      if (this.count <= 1) this.count = 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-details-container {
  min-height: calc(100vh - 196.4px);
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  @include media-md {
    min-height: calc(100vh - 122px);
  }
  .image-details-container {
    .product-details-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #063757;
      line-height: 1.3;
      letter-spacing: -1px;
    }
    .image-details {
      width: 12rem;
    }
  }
  .information-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .information-product-price {
      font-size: 2.125rem;
      color: #063757;
      font-weight: 700;
      text-align: left;
    }
    .product-stock,
    .product-ship {
      font-weight: 700;
      letter-spacing: -1px;
    }
    .product-stock {
      color: #fcb913;
    }
    .product-ship {
      color: #27a20b;
    }

    .add-to-cart-container {
      display: flex;
      flex-direction: row;
      flex-basis: 0;
      .add-to-cart-button {
        flex: 2;
        border: none;
        outline: none;
        background-color: #ff6600;
        color: #ffffff;
        font-weight: 700;
        letter-spacing: 2px;
        height: 3.125rem;
      }
      .quantity-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        height: 50px;
        border: 0.0625rem solid #dee1e7;
        margin-right: 0.95rem;
        input {
          font-size: 0.8rem;
          font-weight: 700;
          width: 1.8rem;
          padding: 3px;
          align-self: stretch;
          border: none;
          text-align: center;
        }
        .quantity-icon {
          width: 1.25rem;
          height: 1.25rem;
          padding: 5px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
