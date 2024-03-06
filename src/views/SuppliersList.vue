<script >
import Supplier from "@/views/Supplier.vue";

export default {
  data(){
    const Suppliers = [
      {
        id: 1,
        name: "Fournisseur 1 ?",
        status: true,
        checkedAt: format(new Date())
      },
      {
        id: 2,
        name: "Fournisseur 2",
        status: false,
        checkedAt: format(new Date())
      }
    ]
  }

}


</script>

<template>
  <div >
    <h1>Liste des fournisseurs</h1>
<!--    <RouterLink to="/supplier">Fournisseur</RouterLink>-->
<!--    <Supplier v-for="(supplierItem,index) in suppliers" :key="index" :supplier="supplierItem"  ></Supplier>-->
    <supplier></supplier>
  </div>
</template>

<style scoped>
h1{
  font-family: Calibri;
  color:  #414e62 ;
  text-align: center;
  font-size: 50px;
}

</style>