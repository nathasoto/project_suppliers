<!--father-->
<script setup>
import Supplier from '@/components/Supplier.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { fetchData } from '../API/supplier_API.js'

const suppliers = ref([])
const loading = ref(false)
const error = ref(null)

// const suppliers = [
//   {
//     id: 1,
//     name: "Fournisseur 1 ",
//     status: true,
//     checkedAt:new Date()
//   },
//   {
//     id: 2,
//     name: "Fournisseur 2",
//     status: false,
//     checkedAt: new Date()
//   }
//  ];


onMounted(() => {
  loading.value = false
  fetchData().then(response => suppliers.value = response)

})


</script>

<template>
  <div>
    <h1>Liste des fournisseurs</h1>

    <!-- Show loading -->
    <div v-if="loading">Loading...</div>

    <!-- Show error -->
    <div v-if="error">{{ error }}</div>

    <!-- Show data -->
    <ul v-if="suppliers.length > 0">
      <Supplier v-for="(supplierItem,index) in suppliers" :key="index" :supplier="supplierItem"></Supplier>
    </ul>

  </div>
</template>

<style scoped>
h1 {
  font-family: Calibri, cursive;
  color: #414e62;
  text-align: center;
  font-size: 50px;
}
</style>
