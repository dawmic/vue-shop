<template>
  <header class="container-fluid">
    <div class="row align-items-center mt-2">
      <div class="col-10 col-md-6  order-md-2" @click="moveToHomepage">
        <h1 clas="text-secondary d-flex justify-content-start">
          <img src="@/assets/bicycle.png" alt="bicycle logo" /> BIKES
          <!--<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>-->
          <span class="text-warning logo-text">24/7</span>
        </h1>
      </div>
      <div class="input-group mt-1 mb-3 col-9 col-md-3 order-md-1">
        <span class="input-group-text bg-light" id="basic-addon1"
          >&#x1F50D;</span
        >
        <input
          type="text"
          class="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="col-3 col-md-2 order-md-2 offset-md-1">
        <button
          type="button"
          class="btn btn-light position-relative mb-2 offset-md-1"
        >
          <img
            src="@/assets/shopping-cart.png"
            class="cart-icon"
            alt="shopping cart"
          />
          <!-- <div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>-->
          <span
            class="
              position-absolute
              top-0
              start-100
              translate-middle
              badge
              rounded-pill
              bg-danger
              text-light
            "
          >
            {{ cartNumber }}
          </span>
        </button>
      </div>
    </div>
    <div class="row align-items-center"></div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      cartNumber: 99,
    };
  },
  methods:{
    moveToHomepage(){
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  min-height: 5rem;
  border-bottom: 1px solid black;

  div {
    height: 100%;
  }
}
h1 {
  font-size: 2rem;
  letter-spacing: 1.4px;
  width: 80%;
  span {
    font-size: 1.4rem;
  }
}
@include media-xxsd {
  h1 {
    width: 100%;
  }
  .logo-text{
    display: none;
  }

}
@include media-sm {
  h1 {
    font-size: 2.2rem;
    width: 60%;
  }
}
@include media-md {
  h1 {
    font-size: 2.4rem;
    width: 100%;
  }
}
</style>