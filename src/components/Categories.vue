<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link categories-link" to="/">
            <img class="nav-icon" src="@/assets/nav/bikes.svg" alt="bikes" />
            BIKES</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link categories-link" to="home"
            ><img class="nav-icon" src="@/assets/nav/parts.svg" alt="parts" />
            PARTS</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link categories-link" to="home"
            ><img class="nav-icon" src="@/assets/nav/tools.svg" alt="tools" />
            TOOLS</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link categories-link" to="home"
            ><img
              class="nav-icon"
              src="@/assets/nav/clothes.svg"
              alt="clothes"
            />
            CLOTHES</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link categories-link" to="home"
            ><img
              class="nav-icon"
              src="@/assets/nav/accessories.svg"
              alt="asscessories"
            />
            ACCESSORIES</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Categories",
};
</script>

<style lang="scss" scoped>
.categories-link {
  color: #063757 !important;
  font-weight: 700;
  font-size: 1.3rem;
  text-align: left;
  margin: 0.5rem;
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
  }
}
.navbar-nav {
  margin: 0 auto;
}
.navbar-toggler {
  position: absolute;
  top: 0;
  right: 5%;
  margin-top: -7rem;
}
.nav-icon {
  height: 2rem;
  width: 2rem;
}
@include media-md {
  .navbar-toggler {
    margin-top: -4rem;
    right: 12%;
  }
}
</style>