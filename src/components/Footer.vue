<template>
  <div class="footer-container container-fluid">
    <div class="row footer-row">
      <h3 class="col-12 col-md-2  m-3 m-md-0 ml-xl-5">BIKE <span class="text-warning logo-text">24/7</span></h3>
      <p class="footer-paragraph col-12 col-md-5 col-lg-4 col-xl-5 m-0">
        © COPYRIGHT 2022 Bike24/7  ALL RIGHTS RESERVED
      </p>
      <ul class="footer-list col-12 col-md-5 col-lg-4 col-xl-3 offset-lg-2 offset-xl-1">
        <li class="footer-list-item m-2 mt-md-3"><a href="#" class="footer-list-item-link">About us</a></li>
        <li class="footer-list-item m-2 mt-md-3"><a href="#" class="footer-list-item-link">Contact</a></li>
        <li class="footer-list-item m-2 mt-md-3"><a href="#" class="footer-list-item-link">Privacy Policy</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer-container {
  background-color: #006496;
.footer-row{
    display: flex;
    align-items: center;
    justify-content: start; 
    height: 100%;
}
  h3 {
    color: #f8f9fa;
    font-weight: 700;
    letter-spacing: -1px;
    text-align: left;
    span {
      font-size: 1rem;
      font-weight: 700;
    }
  }
  .footer-paragraph {
    font-size: 0.7rem;
    color: #ffffff;
    font-weight: 500;
  }
  .footer-list{
    
      list-style-type: none;
      display: flex;
      justify-content: center;
      .footer-list-item{
         .footer-list-item-link{
             color: #FFFFFF;
         }
      }
  }
}
</style>
