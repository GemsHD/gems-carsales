<template>
  <div class="order-details-container">
    <div class="ordered-vehicles">
      <ul>
        <h3> Ordered Vehicles</h3>
        <li v-for="(vehicle, dealership) in orderedVehicles" :key="dealership">
          <ul>
            <li v-for="(details, model) in vehicle" :key="model">
                <div class="details-content">
                    <div class="left">
                        {{ details.amount }}x {{ details.name }}
                    </div>
                    <div class="right">
                       - ${{ details.price * details.amount }}
                    </div>
                </div>
               
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="vehicle-exchange">
      <ExchangeVehicle @numberPlateSubmitted="handleNumberPlateSubmitted" />
    </div>
  </div>

  </template>
  <script setup> 
  import ExchangeVehicle from './ExchangeVehicle.vue';

  const props = defineProps({
    orderedVehicles: {
      type: Object,
      required: true
    },
    title: {
        type: String,
        required: true
    }
  });
  </script>
  
  <style scoped>
    h3 {
        font-size: 18px;
        color: #e2e8f0;
        font-weight: 500;
        min-width: 50%;
        white-space: nowrap;
        margin-bottom: 1rem;
    }

    .order-details-container {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }

    .ordered-vehicles {
        display: flex;
        flex-direction: column;
        padding: 16px;
        margin-bottom: 16px;
        width: 50%;
        background-color: #2d3748;
        box-shadow: 2px 2px 4px #22262c;
    }

    .details-content {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-bottom: 0.5rem;
    }

    .left {
        width: 75%;
    }
    .right {
        width: 25%;
        color: red;
    }

    .vehicle-exchange {
      width: 50%
    }
  </style>