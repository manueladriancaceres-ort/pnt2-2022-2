<template>
  <div>
    Clientes
    <!--Codigo {{ $route.params.id }} -->
    <li v-for="cliente in clientes" :key="cliente.codigo">
      {{ cliente.codigo }} {{ cliente.nombre }}
      <button @click="eliminar(cliente.codigo)">Elimar</button>
    </li>

    <div>
      codigo <input type="text" v-model="cliente.codigo" /> nombre
      <input type="text" v-model="cliente.nombre" />
      <button @click="agregar">Agregar</button> <br />
      <button @click="irhome">Ir a home</button>
    </div>
    {{ mensaje }}
  </div>
</template>

<script lang="ts">
import axios from "axios";
export default {
  data() {
    return {
      clientes: [],
      cliente: {},
      mensaje: "",
    };
  },
  methods: {
    irhome() {
      this.$router.push("/");
    },
    async agregar() {
      let datos = { ...this.cliente };
      this.clientes.push(datos);
      await axios.post("http://localhost:3000/api/clientes", datos);
    },
    async eliminar(id: any) {
      await axios.delete("http://localhost:3000/api/clientes/" + id);
      this.clientes = this.clientes.filter((cliente) => cliente.codigo != id);

    },
  },
  async mounted() {
    const datos = await axios.get("http://localhost:3000/api/clientes");
    console.log(datos.data);
    this.clientes = datos.data;
  },
};
</script>

<style>
</style>