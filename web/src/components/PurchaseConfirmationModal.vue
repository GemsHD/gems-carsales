<template>
    <div class="modal-wrapper" v-if="showModal">
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <h2 class="modal-title">Confirmation</h2>
        <p>
          Are you sure you want to purchase the vehicle "{{ vehicleName }}" for ${{ vehiclePrice.toLocaleString() }}?
        </p>
        <div class="modal-buttons">
          <button class="modal-button cancel" @click="cancelPurchase">Cancel</button>
          <button class="modal-button accept" @click="confirmPurchase">Confirm</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import axios from 'axios';

  export default {
    props: {
      vehicleName: {
        type: String,
        required: true
      },
      vehiclePrice: {
        type: Number,
        required: true
      },
      showModal: {
        type: Boolean,
        required: true
      },
      vehicleModel: {
        type: String,
        required: true
      },
      job: {
        type: String,
        required: true
      }
    },
    methods: {
      cancelPurchase() {
        this.$emit('cancel-purchase');
      },
      confirmPurchase() {
        const vehicleName = this.vehicleName;
        const price = this.vehiclePrice;
        const vehicleModel = this.vehicleModel;
        const job = this.job;

        axios.post('https://gems-carsales/confirmPurchase', {
            vehicleName,
            price,
            vehicleModel,
            job
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        })
        this.$emit('confirm-purchase');
      }
    }
  };
  </script>
  
  <style scoped>
  .modal-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    z-index: 9999;
  }
  
  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  
  .modal-content {
    background-color: #1a202c;
    padding: 20px;
    border-radius: 4px;
    margin-top: 25vh;
    z-index: 2;
    color: #e2e8f0;
    box-shadow: 2px 2px 4px #22262c;
  }
  
  .modal-title {
    margin-top: 0;
    font-size: large;
    font-weight: 600;
    margin-bottom: 1vh;
  }
  
  .modal-buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    color: #FFF;
  }
  
  .modal-button {
    padding: 8px 16px;
    margin-left: 8px;
    border-radius: 5px;
  }

  .accept {
    background: green;
  }

  .cancel {
    background: red;
  }
  </style>