<!--father-->
<script setup>
import Supplier from "@/components/Supplier.vue";
import { ref, onMounted } from 'vue';
import axios from 'axios';

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


const suppliers = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('https://suppliers.depembroke.fr/api/suppliers');
    suppliers.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

</script>

<template>
  <div>
    <h1>Liste des fournisseurs</h1>
    <Supplier v-for="(supplierItem,index) in suppliers" :key="index" :supplier="supplierItem"  ></Supplier>
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
