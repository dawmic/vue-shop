<template>
  <div
    class="cost-container col-12 mt-5 d-flex flex-column justify-content-start"
  >
    <div class="delivery-container col-12 d-flex flex-column align-items-start">
      <h3 class="cost-header mt-4 mb-3">DELIVERY TIME</h3>
      <p class="delivery-paragraph">Ships immediately</p>
      <p class="delivery-paragraph">Delivery time to Poland 5-9 days</p>
      <p class="delivery-paragraph">Shopping after receipt of payment</p>
    </div>
    <div class="summary-container col-12 d-flex flex-column align-items-start">
      <h3 class="cost-header mt-4 mb-3">ORDER SUMMARY</h3>
      <div
        class="
          summary-paragraph-container
          col-12
          d-flex
          justify-content-between
        "
      >
        <p class="summary-paragraph">Total Product Value incl.VAT:</p>
        <p class="summary-paragraph price">$9999</p>
      </div>
      <div
        class="
          summary-paragraph-container
          col-12
          d-flex
          justify-content-between
        "
      >
        <p class="summary-paragraph">Bulky cost:</p>
        <p class="summary-paragraph price">$10.82</p>
      </div>
      <div
        class="
          summary-paragraph-container
          col-12
          d-flex
          justify-content-between
        "
      >
        <p class="summary-paragraph">Shipping cost:</p>
        <p class="summary-paragraph price">$9.99</p>
      </div>
      <hr class="tax-separator col-12 my-3" />
      <div
        class="
          summary-paragraph-container
          col-12
          d-flex
          justify-content-between
        "
      >
        <p class="summary-paragraph">Total amount incl. VAT:</p>
        <p class="summary-paragraph price">$249.99</p>
      </div>
      <div
        class="
          summary-paragraph-container
          col-12
          d-flex
          justify-content-between
        "
      >
        <p class="summary-paragraph">VAT included 23 %:</p>
        <p class="summary-paragraph price">$39.99</p>
      </div>
    </div>
    <div>
      <button
        @click="moveToForm"
        class="checkout-btn mt-5 mb-2 btn"
        :disabled="!cartStatus"
      >
        CHECKOUT
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TotalCost",
  props: ["cart"],
  methods: {
    moveToForm() {
      this.$router.push("/form");
    },
  },
  computed: {
    cartStatus() {
      return this.cart.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.cost-container {
  background: #f7f7f7;

  .cost-header {
    font-size: 0.8rem;
    color: #063757;
    font-weight: 700;
    letter-spacing: 2px;
  }
  .delivery-container {
    .delivery-paragraph {
      color: #27a20b;
      font-weight: 700;
      font-size: 1rem;
      margin: 0;
    }
  }
  .summary-container {
    .summary-paragraph-container {
      padding: 0;
      .summary-paragraph {
        color: #063757;
        margin-bottom: 0.2rem;
      }
      .price {
        font-weight: 700;
      }
    }
  }
  .tax-separator {
    height: 0.3rem;
    background: #dee1e7;
    padding: 0;
    margin: 0;
  }
  .checkout-btn {
    border: none;
    outline: none;
    background-color: #ff6600;
    color: #ffffff;
    font-weight: 700;
    letter-spacing: 2px;
    height: 3.125rem;
    width: 90%;
  }
}
</style>