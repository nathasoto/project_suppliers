<script setup>

import {RouterLink} from "vue-router";

</script>

<template>
  <RouterLink to="/suppliersmap" ><button class = "buttonLink" role="link">Voir la carte</button></RouterLink>
</template>

<style scoped>

.buttonLink{
  background:  #5bbc84 ;
  width: 400px;
  height: 70px;
  font-family: Calibri ;
  color:  #414e62 ;
  font-size: 25px;
  border: none;
}

</style>