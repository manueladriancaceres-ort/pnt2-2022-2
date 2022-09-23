<template>
  <div>
    Sistema
    <li v-for="item in lista" :key="item.codigo">
        {{item.codigo}} {{item.nombre}}
    </li>
    Codigo <input type="text" v-model="item.codigo">
    Nombre <input type="text" v-model="item.nombre">
    <button @click="agregar">Agregar</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            lista: [],
            item: {}
        }
    },
    async mounted() {        
        try {
            const response = await axios.get('http://localhost:3000/api/productos');
            this.lista = response.data;
        } catch(e) {
            console.log(e);
        }        
    },
    methods: {
        async agregar() {
            try {
                this.lista.push({...this.item});
                await axios.post('http://localhost:3000/api/productos',this.item);  
            } catch(e) {
                console.log(e);
            }
        }
    }   
}
</script>

<style>

</style>