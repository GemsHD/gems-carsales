<template>
  <div class="vehicle-exchange-container">
    <h3>Exchange Vehicle</h3>
    <p>Enter the plate number to exchange it for 60% of it's import value.</p>
    <input v-model="numberPlate" type="text" placeholder="Enter Number Plate" />
    <button
      class="modal-button accept"
      @click="showExchangeModal = true"
      :disabled="numberPlate.length == 0"
    >
      Submit
    </button>
  </div>
  <ExchangeConfirmationModal
    :vehiclePlate="numberPlate"
    :showModal="showExchangeModal"
    @cancel-exchange="cancelExchange"
    @confirm-exchange="confirmExchange"
  />
</template>

<script>
import ExchangeConfirmationModal from "./ExchangeConfirmationModal.vue";
export default {
  components: {
    ExchangeConfirmationModal,
  },
  data() {
    return {
      numberPlate: "",
      showExchangeModal: false,
    };
  },
  methods: {
    cancelExchange() {
      this.showExchangeModal = false;
    },
    confirmExchange() {
      this.showExchangeModal = false;
    },
  },
};
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

p {
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
}
.number-plate-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.modal-button {
  padding: 8px 16px;
  margin-left: 8px;
  border-radius: 5px;
  max-width: fit-content;
  align-self: end;
}

.accept {
  background: green;
}

.vehicle-exchange-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #2d3748;
  box-shadow: 2px 2px 4px #22262c;
  width: 100%;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #2d3748;
  box-shadow: 2px 2px 4px #22262c;
  margin-bottom: 0.5rem;
}
</style>
