<script setup>
//  [45.1667, 5.7167];
import "leaflet/dist/leaflet.css";
import { ref } from 'vue';
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";

const zoom = ref(2);

const suppliers = ref([
  {
    id: 1,
    latitude: 45.171112,
    longitude:  5.695952
  },
  {
    id: 2,
    latitude: 45.183152,
    longitude: 5.699386
  }
]);

</script>

<template>
  <div>
    <h1>Carte des fournisseurs</h1>
    <div style="height:600px; width:800px">
      <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
        <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
        ></l-tile-layer>

        <!-- Agregar marcadores desde la lista de proveedores -->
        <l-marker v-for="supplier in suppliers" :key="supplier.id" :lat-lng="[supplier.latitude, supplier.longitude]">
          <l-popup>{{ `Proveedor ID: ${supplier.id}` }}</l-popup>
        </l-marker>
      </l-map>
    </div>
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
