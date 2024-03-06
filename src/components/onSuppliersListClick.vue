<script setup>

import {RouterLink} from "vue-router";
</script>

<template>
    <RouterLink to="/supplierslist" ><button class="buttonLink" role="link">Consulter la liste des fournisseurs</button></RouterLink>
</template>

<style scoped>
.buttonLink {
  background: #5bbc84;
  width: 400px;
  height: 70px;
  font-family: Calibri;
  color: #414e62;
  font-size: 25px;
  margin-right: 10px;
  border: none;
}

</style>