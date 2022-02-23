<template>
  <div
    class="carousel-header carousel slide col-12 mt-0 p-0"
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
  height: auto;
 // max-height: 22.5rem;
}

@include media-sm {
  .slideImg {
    //height: 13rem;
    height: auto;
}
}
@include media-md {
  .slideImg {
    height: 16.5rem;
  }
}
@include media-lg {
  .slideImg {
    height: 21.375rem;
    
  }
}
@include media-xl {
  .slideImg {
    height: 24.6875rem;
}
}
@include media-xxl{
  .slideImg{
    height: 31.25rem;
  }
} 
</style>