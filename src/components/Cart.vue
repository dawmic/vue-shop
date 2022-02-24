<template>
  <div class="cart-container">
    <Header />
    <Categories />

    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="products-container col-11 col-md-6">
          <h2 class="cart-header mt-2">Your cart</h2>
          <!--<table>
            <tr class="d-none d-xl-table-row">
              <th>PRODUCT</th>
              <th>QUANTITY</th>
              <th>PRICE</th>
              <th>SUM</th>
            </tr>
            <tr v-for="item in cart" :key="item.id">
              <td>{{ item.description }}</td>
              <td>{{ item.id }}</td>
              <td>{{ item.price }}</td>
              <td>1</td>
            </tr>
          </table>-->
          <div class="cart-product d-flex">
            <img
              src="https://images.bike24.net/media/120/i/mb/a3/c7/93/252635-00-d-496457.jpg"
              alt=""
            />
            <div class="cart-product-details">
              <h2>BIKE PEDALS - black</h2>
              <p class="cart-product-details-description">
                122mm black road mountain
              </p>
              <p class="cart-product-details-stock">Still 10 in stock</p>
            </div>
          </div>
        </div>
        <div class="order-summary-container col-12 col-md-5 ml-md-2">
          <TotalCost :cart="cart" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Categories from "../components/Categories.vue";
import TotalCost from "../components/TotalCost.vue";
export default {
  name: "Cart",
  components: { Header, Categories, TotalCost },
  data() {
    return {
      cart: [
        {
          id: 1001,
          title: "Cube Agree",
          description: "Road Bike",
          price: "$2999",
        },
        {
          id: 1002,
          title: "Nitka",
          description:
            "Nitka, z którą twój kot będzie się mógł bawić <strong>bardzo</strong> długo!",
          price: 799,
        },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
.cart-container {
  background: #ffffff;
  .cart-header {
    font-size: 1.5rem;
    text-align: left;
    margin: 0;
    color: #063757;
    padding-bottom: 1rem;
    font-weight: 700;
  }
  .products-container {
    margin: 0;
    padding: 0;
    table {
      width: 100%;
      tr {
        text-align: left;
        border-bottom: 0.0625rem solid #dee1e7;
        th {
          font-size: 0.8rem;
        }
        td {
          padding: 1rem 0;
          width: 70%;
        }
      }
    }
    .cart-product {
      img {
        margin: 0 1rem 0 1rem;
      }
      .cart-product-details {
        h2,
        .cart-product-details-description,
        .cart-product-details-price,
        .cart-product-details-stock {
          text-align: left;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }
        h2 {
          font-size: 1rem;
          color: #006496;
        }
        .cart-product-details-description {
          font-size: 0.8rem;
        }
        .cart-product-details-stock {
          color: #27a20b;
          font-size: 0.75rem;
        }
        .cart-product-details-price {
        }
      }
    }
  }
  .order-summary-container {
    padding: 0;
  }
}
</style>