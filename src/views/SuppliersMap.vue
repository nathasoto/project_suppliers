<script setup>
import "leaflet/dist/leaflet.css";
// import { ref } from 'vue';
import { ref, onMounted } from 'vue';
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import L from 'leaflet'

const zoom = ref(2);

// const suppliers = ref([
//   {
//     id: 1,
//     latitude: 45.171112,
//     longitude:  5.695952
//   },
//   {
//     id: 2,
//     latitude: 45.183152,
//     longitude: 5.699386
//   }
// ]);

import { fetchData } from '@/API/supplier_API.js'

const suppliers = ref([]);
const loading = ref(false);
const error = ref(null);


onMounted(() => {
  loading.value = false
  fetchData().then(response => suppliers.value = response);

});


</script>

<template>
  <div >
    <h1>Carte des fournisseurs</h1>
    <div class="map" >
      <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
        <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
        ></l-tile-layer>

        <!-- Agregar marcadores desde la lista de proveedores -->
        <l-marker v-for="supplier in suppliers" :key="supplier.id" :lat-lng="[supplier.latitude, supplier.longitude]">
          <l-popup>{{ `Proveedor ID: ${supplier.name}` }}</l-popup>
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
.map{
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translate(-50%, -50%);
  height:600px;
  width:800px;

}

</style>
