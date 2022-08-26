const obj = Vue.createApp({
    data() {
    return {
    listaLibros:[
        {nombre:'Fisica1', cantidad:3},
        {nombre:'Qumica1', cantidad:5},
        {nombre:'Matematica', cantidad:5},
        {nombre:'Logica', cantidad:3}
        
    ],
    libro:{nombre:'',cantidad:0},
    listaNombres:['Maxi','Seba']
    }
    },

    methods:{
        agregarLibro(){
            this.listaLibros.push({...this.libro});
            //llamar a la api que guarda en la base de datos
            this.libro={};
            /* otra forma
            let cantidad = this.libro.cantidad;
            let nombre = this.libro.nombre;
            this.listaLibros.push({nombre:nombre,cantidad:cantidad})
            */

            /*
            let params = {nombre: this.libro.nombre, cantidad: this.libro.cantidad};
            this.listaLibros.push( params);

            //this.listaLibros.push({... this.libro});
            this.libro= {};  
            */

        },
        filtrarLibros(){
          this.listaLibros =   this.listaLibros.filter(libro => libro.cantidad>4);
        }
    }

    }).mount('#app')