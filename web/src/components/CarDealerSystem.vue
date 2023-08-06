<template class="template">
    <div class="main-container">
        <div v-if="show">
            <HeaderComponent :title="title" :accountBalance="balance" />
            <div>
                <TabListComponet :tabs="['Catalogue', 'Order Details']">
                    <template v-slot:default="{ activeTab }">
                        <div v-if="activeTab === 0"><OverviewContainer :carDetails="carDetails" :balance="balance"/></div>
                        <div v-if="activeTab === 1"><OrderDetailComponent :title="title" :orderedVehicles="orderedVehicles"/></div>
                    </template>
                </TabListComponet>
            </div>
        </div>
    </div>
</template>

<script setup>
// Here we're importing the HelloWorld component from the specified path
    import HeaderComponent from './HeaderComponent.vue';
    import TabListComponet from './TabListComponent.vue';
    import OverviewContainer from './OverviewContainer.vue';
    import OrderDetailComponent from './OrderDetailComponent.vue';
</script>

<script>
        export default {
    props: {
        show: {
            type: Boolean,
            required: true,
            default: false,
        },
        balance: {
            type: Number,
            required: true,
            default: 0
        },
        title: {
            type: String,
            required: true,
            default: "GEMS CAR SHOP"
        },
        carDetails: {
            type: Array,
            required: true
        },
        orderedVehicles: {
            type: Array,
            required: true
        }
    },
    components: { OrderDetailComponent }
};
</script>

<style scoped>
    .template {
        background: transparent;
    }

    .main-container {
        max-width: 50%;
        max-height: 75vh;
    }
</style>