<template>
  <form
    id="contact-form"
    class="needs-validation"
    novalidate
    @submit.prevent="summarize"
  >
    <h2>PERSONAL INFORMATION</h2>
    <div class="row mx-1">
      <div class="col-12 col-md-6 mt-2">
        <div class="form-group">
          <label for="email">EMAIL</label>
          <input
            class="form-control"
            type="email"
            id="email"
            title="Email"
            required
            v-model="order.email"
          />
          <span class="valid-feedback">Looks good!</span>
          <span class="invalid-feedback"
            >Email is required in valid format.</span
          >
        </div>
      </div>
    </div>
    <div class="row mx-1">
      <div class="col-12 d-flex">
        <div class="form-check mr-2 my-2">
          <input
            class="form-check-input"
            type="radio"
            name="phrase"
            id="mr"
            v-model="order.title"
            v-bind:value="Mr"
            required
          />
          <label class="form-check-label" for="mr"> Mr </label>
          <span class="valid-feedback">Looks good!</span>
          <span class="invalid-feedback">Title is required</span>
        </div>
        <div class="form-check m-2">
          <input
            class="form-check-input"
            type="radio"
            name="phrase"
            id="ms"
            v-model="order.title"
            v-bind:value="Ms"
            required
          />
          <label class="form-check-label" for="ms"> Ms </label>
        </div>
        <div class="form-check m-2">
          <input
            class="form-check-input"
            type="radio"
            name="phrase"
            id="company"
            v-model="order.title"
            v-bind:value="Company"
            required
          />
          <label class="form-check-label" for="company"> Company </label>
        </div>
      </div>
    </div>
    <div class="row mx-1">
      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="name"> FIRST NAME</label>
          <input
            class="form-control"
            type="text"
            id="name"
            title="First Name"
            required
            v-model.lazy="order.firstName"
          />
          <span class="valid-feedback">Looks good!</span>
          <span class="invalid-feedback"
            >Please provide a valid first name.</span
          >
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="lastName">LAST NAME</label>
          <input
            class="form-control"
            type="text"
            id="lastName"
            title="Last Name"
            required
            v-model.lazy="order.lastName"
          />
          <span class="valid-feedback">Looks good!</span>
          <span class="invalid-feedback"
            >Please provide a valid last name.</span
          >
        </div>
      </div>
      <div class="col-12 col-md-8">
        <div class="form-group">
          <label for="address">ADDRESS</label>
          <input
            class="form-control"
            type="text"
            id="address"
            title="Address"
            required
            v-model.lazy="order.address"
          />
          <span class="valid-feedback">Looks good!</span>
          <span class="invalid-feedback">Please provide a valid address.</span>
        </div>
      </div>
      <div class="col-4">
        <div class="form-group">
          <label for="zip">ZIP</label>
          <input
            class="form-control"
            type="text"
            id="zip"
            title="Zip"
            required
            v-model.lazy="order.zip"
          />
          <span class="valid-feedback">Looks good!</span>
          <span class="invalid-feedback">Please provide a valid zip.</span>
        </div>
      </div>
      <div class="col-8 col-md-6">
        <div class="form-group">
          <label for="city">CITY</label>
          <input
            class="form-control"
            type="text"
            id="city"
            title="City"
            required
            v-model.lazy="order.city"
          />
          <span class="valid-feedback">Looks good!</span>
          <span class="invalid-feedback">Please provide a valid city.</span>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="country">COUNTRY</label>
          <select
            class="form-control"
            id="country"
            title="country"
            required
            v-model="order.country"
          >
            <option disabled value="">Country</option>
            <option
              v-bind:value="country"
              v-for="(country, key) in countries"
              v-bind:key="key"
            >
              {{ country }}
            </option>
          </select>
          <span class="valid-feedback">Looks good!</span>
          <span class="invalid-feedback">Please choose a valid country.</span>
        </div>
      </div>
    </div>
    <button type="submit" @click="summarize" class="btn btn-primary m-3">
      Summary
    </button>
    <div v-if="spinner" class="spinner-4"></div>
  </form>
</template>

<script>
let validated = false;
/*
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
            if (form.checkValidity() === true) {
              validated = true;
            }
          },
          false
        );
      });
    },
    false
  );
})();
*/
import axios from "axios";
export default {
  name: "Form",
  data() {
    return {
      Mr: "Mr",
      Ms: "Ms",
      Company: "Company",
      order: {
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        zip: "",
        state: "",
        country: "",
      },
      countries: [],
      spinner: false,
    };
  },

  created() {
    axios
      .get("/countries.json")
      .then((res) => {
        this.countries = res.data.country;
      })
      .catch((err) => console.log(err));
  },
  mounted() {
    var forms = document.getElementsByClassName("needs-validation");
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
          if (form.checkValidity() === true) {
            validated = true;
          }
        },
        false
      );
    });
  },
  methods: {
    summarize() {
      if (validated) {
        this.spinner = true;

        setTimeout(() => {
          this.$emit("emitOrder", this.order);
          this.$router.push("/form/ordersummary");
        }, 2000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#contact-form{
  min-height: calc(100vh - 220.4px);
  @include media-md{
    min-height: calc(100vh - 146px);
  }
}
h2 {
  color: #063757;
  letter-spacing: 2px;
  font-size: 0.9rem;
  text-align: left;
  margin: 2rem 1rem 0 1rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #063757;
}
label {
  width: 100%;
  text-align: left;
  color: #063757;
  letter-spacing: 2px;
  font-weight: 700;
  font-size: 0.8rem;
}
.btn {
  display: flex;
  align-self: flex-start;
}
@include media-xl {
  #contact-form {
    max-width: 80%;
    margin: 0 auto;
  }
}
.valid-feedback,
.invalid-feedback {
  text-align: left;
}

.spinner-4 {
  position: absolute;
  top: 48%;
  left: 48%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 1px;
  background: conic-gradient(#0000 10%, #f03355) content-box;
  -webkit-mask: repeating-conic-gradient(
      #0000 0deg,
      #000 1deg 20deg,
      #0000 21deg 36deg
    ),
    radial-gradient(
      farthest-side,
      #0000 calc(100% - 9px),
      #000 calc(100% - 8px)
    );
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation: s4 1s infinite steps(10);
}
@keyframes s4 {
  to {
    transform: rotate(1turn);
  }
}
</style>
