<template>
    <div> 
        {{titulo}} <br/>
        Producto <input type="text" v-model="producto.nombre">
        <button @click="agregar">Agregar</button> 
    </div>
</template>
<script>
export default {
    props: ['titulo'],
    emits: ['agregar'],
    data() {
        return {
            producto: {}
        };
    },
    methods: {
        agregar() {
            this.$emit("agregar",{...this.producto});
        }
    }
}
</script>
<style>

</style>