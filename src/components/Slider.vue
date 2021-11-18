<template>
  <div
    class="
      carousel-header carousel
      slide
      col-12
      mt-3
      col-sm-10
      offset-sm-1
      col-xl-8
      offset-xl-2
    "
    data-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <!--Photo by Julian Hochgesang on Unsplash  -->
        <img
          class="d-block w-100 slideImg"
          src="../assets/slides/slide1.jpg"
          alt="First slide"
        />
      </div>
      <div class="carousel-item">
        <!-- Photo by Tom Conway on Unsplash -->
        <img
          class="d-block w-100 slideImg"
          src="../assets/slides/slide2.jpg"
          alt="Second slide"
        />
      </div>
      <div class="carousel-item">
        <!-- Photo by Tamanna Rumee on Unsplash -->
        <img
          class="d-block w-100 slideImg"
          src="../assets/slides/slide3.jpg"
          alt="Third slide"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
};
</script>

<style lang="scss" scoped>
.slideImg {
  height: 15rem;
}

@include media-sm {
  .slideImg {
    height: 16rem;
  }
}
@include media-md {
  .slideImg {
    height: 20rem;
  }
}
@include media-lg {
  .slideImg {
    height: 22rem;
  }
}
@include media-xl {
  .slideImg {
    height: 26rem;
  }
}
</style>