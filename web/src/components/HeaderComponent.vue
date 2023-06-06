<template>
    <header class="header">
      <div class="header-row">
        <h1 class="header-title">{{ title }}</h1>
      </div>
      <div class="header-row">
        <span class="header-number">Account Balance: ${{ accountBalance.toLocaleString() }}</span>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      accountBalance: {
        type: Number,
        required: true
      }
    },
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #1a202c;
    color: #e2e8f0;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 8vh;
  }
  
  .header-row {
    margin-bottom: 16px;
  }
  
  .header-title {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }
  
  .header-number {
    font-size: 18px;
  }
  </style>