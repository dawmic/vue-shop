<template>
  <div id="app">
    <div class="container-fluid bg-primary">
      <div class="covid-info row align-items-center">
        <p class="col-12 fs-6 text-light">Safe Covid-19 delivery</p>
      </div>
    </div>
    
    <router-view :products="products" />
    <Footer/>
  </div>
</template>
<script>

import axios from "axios";
import Footer from "./components/Footer.vue"
export default {
  name: "App",
  components: {Footer},
  data() {
    return {
      filter: "",
      products: [],
    };
  },
  computed: {
    filteredAndSortedTracks() {
      return this.playlistInfo.tracks.filter((track) => {
        return (
          track.name.toLowerCase().includes(this.filter_tracks.toLowerCase()) ||
          track.artists_names
            .toLowerCase()
            .includes(this.filter_tracks.toLowerCase()) ||
          track.album_name
            .toLowerCase()
            .includes(this.filter_tracks.toLowerCase())
        );
      });
    },
  },
  created() {
    axios.get("/products.json").then((res) => {
      console.log(res.data.products);
      this.products = res.data.products;
    });
  },
  updated(){
    window.scrollTo(0, 0);
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .covid-info {
    height: 50px;
    background-color: #006496;
    p {
      height: auto;
      margin: 0;
      padding: 0;
    }
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
