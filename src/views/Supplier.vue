<script setup>
// import SuppliersList from "@/views/SuppliersList.vue";

defineProps({
  supplier: Object
});

</script>

<template>
  <div>
 <h1>hola</h1>
<!--    <h1>{{supplier.name}}</h1>-->
<!--    <h1>{{ supplier.name }}</h1>-->
    <!--      <h3 :class="{ 'green': supplier.status }">{{"A du stock ? OK " }}</h3>-->
    <!--      <h5>Date de dernière revelé des stocks : {{(supplier.checkedAt).toLocaleString()}}</h5>-->


  </div>

</template>

<style scoped>
.div_supplier {
  text-align: center;
  border: 2px solid #414e62;
  width: auto;
  height: auto;
  margin: 10px;
  font-size: 20px;


}

template {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;

}

h1, h5 {
  color: #414e62;
}

.green {
  color: green;
}

h3 {
  color: red;
}

</style>