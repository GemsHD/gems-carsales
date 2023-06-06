<template>
    <div class="modal-wrapper" v-if="showModal">
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <h2 class="modal-title">Sell Vehicle</h2>
        <p>
          Enter the Citizen ID below to sell a "{{ vehicleName }}" for ${{ vehiclePrice.toLocaleString() }}.
        </p>
        <div class="modal-input">
          <label for="input-citizenId">Citizen ID:</label>
          <input
            id="input-citizenId"
            type="text"
            v-model="citizenId"
            :maxlength="maxLength"
            placeholder="GEM51337"
            required
          />
        </div>
        <div class="modal-buttons">
          <button class="modal-button cancel" @click="cancelSell">Cancel</button>
          <button class="modal-button accept" @click="confirmSell" :disabled="citizenId.length < minLength">Confirm</button>
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
      minLength: {
        type: Number,
        default: 8
      },
      maxLength: {
        type: Number,
        default: 8
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
    data() {
      return {
        citizenId: ''
      };
    },
    methods: {
      cancelSell() {
        this.citizenId = '';
        this.$emit('cancel-sell');
      },
      confirmSell() {
        const vehicleName = this.vehicleName;
        const price = this.vehiclePrice;
        const citizenId = this.citizenId;
        const vehicleModel = this.vehicleModel;
        const job = this.job;

        axios.post('https://gems-carsales/sellVehicle', {
            vehicleName,
            price,
            citizenId,
            vehicleModel,
            job
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        })

        this.$emit('confirm-sell');
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
    z-index: 9999; /* Increase the z-index value if needed */
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
    font-size: large;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .modal-input {
    margin: 10px;
    text-align: left;
  }
  
  .modal-input label {
    display: block;
    margin-bottom: 5px;
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
  
  input[type="text"] {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    background-color: #2d3748;
    box-shadow: 2px 2px 4px #22262c;
  }
  </style>