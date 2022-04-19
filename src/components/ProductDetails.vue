<template>
  <div class="product-details-container no-gutters">
    <Header />
    <Categories />
    <div class="row p-0 m-0" v-if="!isError">
      <div
        class="
          image-details-container
          col-12 col-md-6 col-lg-6
          p-0
          m-0
          mt-md-4
          ml-lg-5
        "
      >
        <h3 class="product-details-title text-left ml-4 mr-4 d-md-none">
          {{ product.description }}
        </h3>
        <img class="image-details" :src="product.image" :alt="product.title" />
      </div>
      <div
        class="information-container col-12 col-md-6 col-lg-5 p-0 m-0 mt-md-4"
      >
        <h2
          class="information-product-header text-left d-none d-md-block pr-md-3"
        >
          {{ product.description }}
        </h2>
        <p class="information-product-rate ml-3 mb-2 ml-md-0 pr-md-3">
          Rate
          <span
            v-for="n in 5"
            v-bind:key="n"
            v-bind:class="{ productRate: checkRating(n, product) }"
            >☆</span
          >
        </p>
        <div class="size-container pr-md-3 pr-lg-4" v-if="product.size">
          <label class="ml-3 ml-md-0" for="select-size">Frame size</label>
          <select
            class="ml-3 ml-md-0 mr-3 mr-md-0"
            id="select-size"
            v-model="selectedSize"
          >
            <option disabled>---</option>
            <option :value="item" v-for="item in productSize" :key="item">
              {{ item }}
            </option>
          </select>
        </div>
        <p class="information-product-price ml-3 ml-md-0">
          {{ product.price }}
        </p>
        <div class="delivery-message ml-3 mb-2 ml-md-0 pr-md-3">
          <span class="product-stock">Still 1 in stock</span>
        </div>
        <div class="delivery-message ml-3 mb-2 ml-md-0 text-left pr-md-3">
          <span class="product-ship"
            >Ships immediately - Delivery time to Poland 3-6 days</span
          >
        </div>
        <div
          class="add-to-cart-container col-12 mb-3 mt-1 pl-md-0 pr-md-3 pr-lg-4"
        >
          <div class="quantity-container">
            <button class="quantity-button" @click="removeOneProduct">
              <img
                class="quantity-icon"
                src="@/assets/quantity/minus-line.svg"
                alt="one less product"
              />
            </button>
            <input
              class="quantity-input"
              v-model.number="count"
              type="number"
              inputmode="numeric"
              max="999"
              min="1"
              pattern="[0-9]*"
              @keypress="isNumberKey($event)"
              @input="isMaxChars($event.target)"
            />
            <button class="quantity-button" @click="addOneProduct">
              <img
                class="quantity-icon"
                src="@/assets/quantity/plus-line.svg"
                alt="one more product"
              />
            </button>
          </div>
          <button class="add-to-cart-button">ADD TO CART</button>
        </div>
      </div>
    </div>
    <div class="row p-o m-0" v-if="!isError">
      <div class="description-container col-12 col-md-9">
        <hr />
        <h3 class="product-details-title description text-left ml-2 pb-2">
          Description
        </h3>
        <h4 class="product-details-title text-left ml-2">
          {{ product.description }}
        </h4>
        <p class="product-details-paragraph text-left ml-2">
          {{ product.details }}
        </p>
      </div>
    </div>
    <div v-if="isError">
      <!-- image is from https://www.pngitem.com/middle/iombmRT_404-error-images-free-png-transparent-png/
      personal use only
      -->
      <img src="@/assets/error404.png" alt="error info" />
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Categories from "./Categories.vue";
import axios from "axios";
export default {
  name: "ProductDetails",
  components: { Header, Categories },
  data() {
    return {
      product: "",
      count: 1,
      selectedSize: "---",
      isError: false,
      isLoading: true,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.getProductData();
  },
  methods: {
    getProductData() {
      axios
        .get("/products.json")
        .then((res) => {
          let [result] = res.data.products.filter(
            (item) => item.id == this.$attrs.id
          );
          this.product = result;
        })
        .catch((er) => {
          console.log(er);
          this.isError = true;
        });
    },
    addOneProduct() {
      this.count++;
      if (this.count > 999) {
        this.count = 999;
      }
    },
    removeOneProduct() {
      this.count--;
      if (this.count <= 1) this.count = 1;
    },
    isNumberKey($event) {
      if ($event.charCode >= 48 && $event.charCode <= 57) {
        return true;
      } else {
        $event.preventDefault();
      }
    },
    isMaxChars(el) {
      const max_chars = 3;
      if (el.value.length > max_chars) {
        el.value = el.value.substr(0, max_chars);
        this.count = parseInt(el.value);
      }
    },
    checkRating(n, product) {
      return product.rating - n >= 0;
    },
  },
  computed: {
    productSize() {
      return JSON.parse(this.product.size);
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  color: #063757;
}
.product-details-container {
  min-height: calc(100vh - 196.4px);
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include media-md {
    min-height: calc(100vh - 122px);
  }
  .row {
    max-width: 1440px;
  }
  .product-details-title {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -1px;
  }
  .image-details-container {
    .image-details {
      width: 12rem;
      @include media-md {
        width: 70%;
      }
    }
  }
  .information-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .information-product-header {
      line-height: 1.14;
      font-size: 1.25rem;
      letter-spacing: -1.5px;
      @include media-md {
        font-size: 1.5rem;
      }
    }
    .information-product-rate {
      font-size: 1rem;
      font-weight: 400;
    }
    .size-container {
      width: 100%;
      label {
        width: calc(100% - 16px);
        font-weight: 700;
        text-align: left;
      }
      select {
        height: 3.125rem;
        width: calc(100% - 32px);
        padding-left: 0.75rem;
        font-family: "BlenderPro", "Helvetica", "Arial", sans-serif;
        background-color: #fff;
        border: 0.0625rem solid #dee1e7;
        border-radius: 0;
        outline: none;
        -webkit-appearance: none;
        appearance: none;
      }
      label,
      select {
        @include media-md {
          width: 100%;
        }
      }
    }
    .information-product-price {
      font-size: 2.125rem;
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
      .add-to-cart-button {
        flex: 2;
        border: none;
        outline: none;
        background-color: #ff6600;
        color: #ffffff;
        font-weight: 700;
        letter-spacing: 2px;
        height: 3.125rem;
        cursor: pointer;
        &:hover {
          background-color: #e55c00;
        }
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
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          /* Firefox */
          &[type="number"] {
            -moz-appearance: textfield;
          }
        }
        .quantity-button {
          background: none;
          border: none;
          height: 100%;
          &:active {
            background-color: #efefef;
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
  .description-container {
    max-width: 1440px;
    .description {
      font-size: 1.5rem;
    }
    .product-details-paragraph {
      line-height: 1.5;
    }
  }
}
.productRate {
  color: orange;
}
</style>
