<template>
  <div>
    <h2>Menu</h2>
    <div>
      Id <input v-model="producto.id" type="text">
      Nombre <input v-model="producto.nombre"  type="text">
      Precio <input v-model="producto.importe" type="text" >
      <button @click="agregarProducto">Agregar Producto</button>
    </div>
    <div>
      {{ productos }} 
    </div>
    <button @click="cargarListaProductos">Cargar Lista productos</button>
    {{ mensajeError }}
  </div>
</template>

<script>
import ProductoService from '../services/ProductoService.js'
export default {
  data() {
    return {
      productos: [],
      mensajeError : '',
      producto: {}
    }
  },
  methods: {
    async cargarListaProductos() {
      try { 
        this.productos = await ProductoService.getProductos();
      } catch (e) {
        this.mensajeError = e;
      }
    } ,
    async agregarProducto() {
      try {
        await ProductoService.addProductos(this.producto);
      } catch (e) {
        this.mensajeError = e;
      }
    }
  }
}
</script>

<style>
</style>
  