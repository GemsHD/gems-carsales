<template>
    <div class="row">
      <div class="search-bar">
        <input type="text" v-model="searchValue" placeholder="Search car names" />
      </div>
      <div class="checkbox-container">
        <label for="inStock">
          <span class="custom-checkbox">
            <input type="checkbox" id="inStock" v-model="showInStockOnly" />
            <span class="checkmark"></span>
          </span>
          <span class="checkbox-label">In Stock?</span>
        </label>
      </div>
    </div>
    <div class="overview-container">
      <div
        class="product-container"
        v-for="(product, index) in filteredCarDetails"
        :key="index"
      >
        <CarDetailSquare :product="product" :accountMoney="balance" />
      </div>
    </div>
  </template>

<script>
import CarDetailSquare from "./CarDetailSquare.vue";

export default {
  components: {
    CarDetailSquare,
  },
  props: {
    carDetails: {
      type: Array,
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      searchValue: "",
      showInStockOnly: false,
    };
  },
  computed: {
    filteredCarDetails() {
      let filteredDetails = this.carDetails;

      // Filter based on searchValue
      if (this.searchValue) {
        const searchRegex = new RegExp(this.searchValue, "i");
        filteredDetails = this.carDetails.filter((product) =>
          searchRegex.test(product.name)
        );
      }

      // Filter based on inStockOnly checkbox
      if (this.showInStockOnly) {
        filteredDetails = this.carDetails.filter(
          (product) => product.stock > 0
        );
      }

      return filteredDetails;
    },
  },
};
</script>

<style scoped>
.overview-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}

.search-bar {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 75%;
  margin: auto;
  margin-left: 12%;
  justify-self: center;
  margin-bottom: 10px;
}

.search-bar input {
  width: 100%;
  padding: 5px;
  font-size: 16px;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #2d3748;
  box-shadow: 2px 2px 4px #22262c;
}

.product-container {
  display: flex;
  justify-content: center;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.checkbox-container {
  display: flex;
  align-items: center;
  margin-left: auto;
}
.checkbox-label {
  color: #e2e8f0;
  margin-right: 5px;
}

.custom-checkbox {
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  vertical-align: sub;
  margin-right: 5px;
}

.custom-checkbox input[type="checkbox"] {
  opacity: 0;
  width: 0;
  height: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: #2d3748;
  border-radius: 4px;
  border: 2px solid #4a5568;
}

.custom-checkbox input:checked ~ .checkmark {
  background-color: #2d3748;
}

.custom-checkbox .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}

.custom-checkbox .checkmark:after {
  left: 5px;
  top: 1px;
  width: 4px;
  height: 9px;
  border: solid #e2e8f0;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>
