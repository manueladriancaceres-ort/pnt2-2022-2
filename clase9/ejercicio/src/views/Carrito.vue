<template>
    <div>
        This is Home "Carrito" <br/>
        {{lista}} <br/>
        <Detalle titulo = "Titulo Agregar producto" 
        @agregar="agregar($event)"/>
    </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import { carritoStore } from '../stores/carritoStore.js'
import Detalle from './Detalle.vue'
export default {
    components: {
        Detalle: Detalle
    },
    setup() {
        const store = carritoStore();
        const { lista } = storeToRefs(store);
        const { agregar } = store;
        return { lista, agregar };
    },
    props: {},
    data() {
        return {
        };
    },
    methods: {
        agregar(objeto) {
            this.agregar({ ...objeto });
        }
    },
    components: { Detalle }
}
</script>

<style>

</style>
