const obj = Vue.createApp({
    data() {
        return {
            listaLibros: [{nombre:'Fisica1',cantidad:3},
                          {nombre:'Quimica',cantidad:5},
                          {nombre:'Matematica2',cantidad:3},
                          {nombre:'Logica1',cantidad:2}],
            libro: {}
        }
    },
    methods: {
        agregarLibro() {
            this.listaLibros.push({...this.libro});
            /* otra forma
            let cantidad = this.libro.cantidad;
            let nombre = this.libro.nombre;
            this.listaLibros.push({nombre:nombre,cantidad:cantidad})
            */
            /* otra forma mas
            let params = {nombre: this.libro.nombre, cantidad: this.libro.cantidad};
            this.listaLibros.push( params);
            */
            this.libro = {}
        },
        filtrarListaLibros() {
            this.listaLibros = this.listaLibros.filter(libro => libro.cantidad > 3);            
        }
    }
}).mount('#app')

