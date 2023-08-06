<template>
  <div class="product-card">
    <img :src="img" alt="Product Image" class="product-img" />
    <div class="product-info">
      <div class="product-content">
        <span class="product-text product-name">{{ product.name }}</span>
      </div>
      <div class="product-content">
        <span class="text product-text">Buy Price:</span>
        <span class="product-text price">${{
          product.owner_buy_price.toLocaleString()
        }}</span>
      </div>
      <div class="product-content">
        <span class="text product-text">Sale Price:</span>
        <span class="product-text price">${{
          product.max_price.toLocaleString()
        }}</span>
      </div>
      <div class="product-content">
        <span class="text product-text">Stock:</span>
        <span class="product-text price">{{ product.stock }}</span>
      </div>
      <div class="product-actions">
        <button
          class="order-button"
          :disabled="product.owner_buy_price > accountMoney"
          @click="showBuyModal = true"
        >
          Order
        </button>
        <button
          class="sell-button"
          :disabled="product.stock === 0"
          @click="showSellModal = true"
        >
          Sell
        </button>
      </div>
    </div>
    <PurchaseConfirmationModal
      :vehicleName="product.name"
      :vehiclePrice="product.owner_buy_price"
      :vehicleModel="product.model"
      :showModal="showBuyModal"
      :job="product.job"
      @cancel-purchase="cancelPurchase"
      @confirm-purchase="confirmPurchase"
    />
    <SellVehicleModal
      v-if="showSellModal"
      :vehicleName="product.name"
      :vehiclePrice="product.max_price"
      :vehicleModel="product.model"
      :job="product.job"
      :showModal="showSellModal"
      @cancel-sell="cancelSell"
      @confirm-sell="confirmSell"
    />
  </div>
</template>

<script>
import PurchaseConfirmationModal from "./PurchaseConfirmationModal.vue";
import SellVehicleModal from "./SellVehicleModal.vue";

export default {
  components: {
    PurchaseConfirmationModal,
    SellVehicleModal,
  },
  data() {
    return {
      showBuyModal: false,
      showSellModal: false,
      img: "./img/cars/Zion.png",
    };
  },
  methods: {
    cancelPurchase() {
      this.showBuyModal = false;
    },
    confirmPurchase() {
      this.showBuyModal = false;
      this.$emit("order-confirmed", this.product.owner_buy_price);
    },
    cancelSell() {
      this.showSellModal = false;
    },
    confirmSell(vehicleName) {
      this.showSellModal = false;
    },
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
    accountMoney: Number,
  },
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  margin-bottom: 16px;
  width: 90%;
  background-color: #2d3748;
  box-shadow: 2px 2px 4px #22262c;
  max-width: 250px;
  text-align: center;
}

.product-img {
  width: 200px;
  height: 100px;
  object-fit: cover;
  margin-right: 16px;
}

.product-info {
  display: flex;
  flex-direction: column;
}

.product-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  justify-content: space-evenly;
  gap: 10px;
  width: 100%;
}

.product-text {
  font-size: 18px;
  color: #e2e8f0;
  font-weight: 500;
  min-width: 50%;
  white-space: nowrap;
}

.product-name {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text {
  text-align: end;
}

.price {
  text-align: start;
}

.product-stock {
  margin-bottom: 8px;
}

.product-actions {
  display: flex;
}

.order-button {
  background-color: green;
  border-radius: 5px;
}

.sell-button {
  background-color: red;
  border-radius: 5px;
}

button {
  padding: 8px 16px;
  margin-right: 8px;
  width: 100%;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
