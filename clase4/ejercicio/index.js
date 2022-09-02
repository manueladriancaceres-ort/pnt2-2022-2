// break hasta 21:30

const obj = Vue.createApp({
    data() {
        return {
            factura: {codigo:'00000001',cliente:'Carlos Gomez',items:[]},
            item: {codigo:0,desc:''},
            myStyle: { color: 'green' },
        }
    },
    methods: {
        agregarItem() {
            this.factura.items.push({...this.item});
            this.item = {codigo:0,desc:''}
        },
        ordenarItemsPorDescripcion() {
            this.factura.items.sort((a,b) => a.desc.localeCompare(b.desc));
        },
        imprimirJson() {
            console.log( JSON.stringify(this.factura)  );
        },
        cambiarColorLetraTitulo() {
            this.myStyle.color = "blue";
        }

    }
}).mount('#app')

