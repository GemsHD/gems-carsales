<template>
  <CarDealerSystem class="main" :show="show" :balance="balance" :carDetails="products" :title="title" :orderedVehicles="orderedVehicles"/>
</template>

<script setup>
import CarDealerSystem from "./components/CarDealerSystem.vue";
import { onMounted, ref } from 'vue';
import axios from 'axios';

const show = ref(false);
const balance = ref(1000000);
const title = ref("Mandarin Motors");
const products = ref([
  { name: 'Jester - S Class', img: './img/cars/vehicle.png', owner_buy_price: 345000, max_price: 375000, stockCount: 0 },
  { name: 'Komoda - S Class', img: './img/cars/vehicle.png', owner_buy_price: 345000, max_price: 375000, stockCount: 2 },
  { name: 'Sultan RS - S Class', img: './img/cars/vehicle.png', owner_buy_price: 345000, max_price: 375000, stockCount: 5 },
  { name: 'Sunrise R - S Class', img: './img/cars/vehicle.png', owner_buy_price: 360000, max_price: 400000, stockCount: 3 },
  { name: 'Penumbra FF - A Class', img: './img/cars/vehicle.png', owner_buy_price: 150000, max_price: 250000, stockCount: 0 },
  { name: 'Previon - A Class', img: './img/cars/vehicle.png', owner_buy_price: 155000, max_price: 250000, stockCount: 1 },
  { name: 'Banshee - S Class', img: './img/cars/vehicle.png', owner_buy_price: 345000, max_price: 375000, stockCount: 0 },
  { name: 'Futo GTX Widebody - Drift King Class', img: './img/cars/vehicle.png', owner_buy_price: 200000, max_price: 275000, stockCount: 3 },
]);
const orderedVehicles = ref({
    pdm: {
      futo2: { amount: 1, price: 275000, name: 'Futo GTX Widebody - Drift King Class' },
      sunrise2: { amount: 2, price: 360000, name: 'Sunrise R - S Class' }
    }
  }
);

onMounted(() => {
  window.addEventListener('message', handleNUIEvent);
  window.addEventListener('keydown', handleKeyDown);
});

function handleNUIEvent(event) {
  if (event.data.action === "openNUI") {
    alphabetizeArray(event.data.products, 'name')
    title.value = event.data.title,
    show.value = event.data.show,
    balance.value = event.data.balance,
    products.value = event.data.products,
    orderedVehicles.value = event.data.orderedVehicles
  }
  if (event.data.action === "closeNUI") {
    show.value = event.data.show
  }
}

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    axios.post('https://gems-carsales/close', {})
      .then(response => {
          console.log(response.data);
      })
      .catch(error => {
          console.error(error);
      }
    )
  }
}

function alphabetizeArray(array, property) {
  array.sort((a, b) => {
    const valueA = a[property].toLowerCase();
    const valueB = b[property].toLowerCase();
    if (valueA < valueB) {
      return -1;
    }
    if (valueA > valueB) {
      return 1;
    }
    return 0;
  });
}

</script>
<style scoped>
.main {
  user-select: none;
  margin: auto;
  margin-top: 10vh;
}
</style>