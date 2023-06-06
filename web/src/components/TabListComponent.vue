<template>
  <div class="tab-list">
    <ul class="tab-items">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ 'active': activeTab === index }"
        @click="changeTab(index)"
      >
        {{ tab }}
      </li>
    </ul>
    <div class="tab-content">
      <slot :activeTab="activeTab"></slot>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                activeTab: 0
            };
        },
        props: {
            tabs: {
                type: Array,
                required: true
            }
        },
        methods: {
            changeTab(index) {
                this.activeTab = index;
            }
        }
    };
</script>

<style scoped>
.tab-list {
  width: 100%;
}

.tab-items {
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
  background: #4a5568;
  user-select: none;
}

.tab-items li {
  cursor: pointer;
  padding: 10px 20px;
  background-color: transparent;
  color: #e2e8f0;
}

.tab-items li:hover {
  background-color: #1a202c;
  border-color: #2d3748;
  color: #e2e8f0
}

.tab-items li.active {
  background-color: #2d3748;
  color: #e2e8f0;
  border-bottom: 2px solid #1a202c;
}

.tab-content {
  padding: 20px;
  background-color: #4a5568;
  border: 1px solid #2d3748;
  min-height: 45vh;
  overflow-y: scroll;
  max-height: 45vh;
  scrollbar-width: thin;
  scrollbar-color: #a0aec0 #718096;
}

.tab-content::-webkit-scrollbar {
  width: 8px;
}

.tab-content::-webkit-scrollbar-track {
  background-color: #718096;
}

.tab-content::-webkit-scrollbar-thumb {
  background-color: #a0aec0;
  border-radius: 4px;
}

.tab-content::-webkit-scrollbar-thumb:hover {
  background-color: #cbd5e0;
}
</style>