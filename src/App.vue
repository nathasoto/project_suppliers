<script setup>
import { RouterLink, RouterView } from "vue-router";
import OnMapClick from "@/components/onMapClick.vue";
import OnSuppliersListClick from "@/components/onSuppliersListClick.vue";
import HomeView from "@/views/HomeView.vue";
</script>
<template>
  <header>
    <img alt="imagen" src="https://s.tmimgcdn.com/scr/1200x627/312400/spirulina-icone-do-logotipo-comida-saudavel-organica-v3_312460-original.jpg" />

    <div>
      <h1>Que voulez vous faire ?</h1>

      <nav>
        <OnSuppliersListClick></OnSuppliersListClick>
        <OnMapClick></OnMapClick>
      </nav>
    </div>
  </header>
  <router-view></router-view>
</template>

<style scoped>
img {
  display: block;
  width: 700px;
  height: 300px;
  margin: 80px auto auto;
}
h1 {
  font-family: Calibri,cursive;
  color: #414e62;
  text-align: center;
  font-size: 50px;
}
nav {
  display: flex;
  justify-content: center;
}
</style>
