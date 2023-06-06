<template>
    <div class="search-bar">
        <input type="text" v-model="searchValue" placeholder="Search car names" />
    </div>
    <div class="overview-container">
        <div class="product-container" v-for="(product, index) in filteredCarDetails" :key="index">
            <CarDetailSquare :product="product" :accountMoney="balance" />
        </div>
    </div>
</template>

<script>
    import CarDetailSquare from './CarDetailSquare.vue';

    export default {
        components: {
            CarDetailSquare
        },
        props: {
            carDetails: {
                type: Array,
                required: true
            },
            balance: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                searchValue: "",
            };
        },
        computed: {
            filteredCarDetails() {
                if (!this.searchValue) {
                // Return all carDetails if searchValue is empty
                return this.carDetails;
            }

            // Filter carDetails based on searchValue
            const searchRegex = new RegExp(this.searchValue, "i");
            return this.carDetails.filter((product) =>
            searchRegex.test(product.name)
        );
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
</style>