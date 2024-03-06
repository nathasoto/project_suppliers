<script >
export default {
  data() {

    return {
      list: [
        {name: 'Mon fournisseur', status: false, checkedAt: Date.UTC(2012, 11, 20, 3, 0, 0)},
        {name: 'Fournisseur 2', status: true, checkedAt: Date.UTC(2023, 11, 15, 3, 0, 0)},
      ]
    };
  },
  methods: {
    formatFecha(checkedAt) {
      return new Date(checkedAt).toLocaleString();
    }
  }

};


</script>

<template>
  <div >
    <div class="div_supplier" v-for="(supplier, index) in list" :key="index">
      <h1>{{ supplier.name }}</h1>
      <h3 :class="{ 'green': supplier.status }">{{"A du stock ? OK " }}</h3>
      <h5>Date de dernière revelé des stocks : {{formatFecha(supplier.checkedAt) }}</h5>
    </div>
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
  template{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;

  }
  h1,h5{
    color: #414e62;
  }
   .green {
     color: green;
   }
   h3{
     color: red;
   }

</style>