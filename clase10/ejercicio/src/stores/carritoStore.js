import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const carritoStore = defineStore('carrito', {

    state: () => {
        return { lista: [] }
    },
    actions: {
        agregar(obj) {
            this.lista.push(obj);
        },
    },

})
