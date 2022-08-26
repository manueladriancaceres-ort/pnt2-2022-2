console.log("Hola mundo");

const obj = Vue.createApp({
    data() {
    return {
    mensaje: 'Hola Vue!',
    miTexto:'Texto de arranque',
    nuevoTexto:'',
    miEstilo:{color:'red',fontSize:'50px',background:'blue',display:'block'},
    colorACambiar:'',
    textoACambiar:''
    }
    },

    methods: {
        cambiarColor(){
            this.miEstilo.color='white';
        },
        cambiarColor2(){
            this.miEstilo.color='red';
        },
        cambiarColor3(){
            this.miEstilo.color=this.colorACambiar;
        },
        cambiarTexto(){
            this.mensaje=this.textoACambiar;
        },
        cambiarTextoGrande(){
            this.miTexto=this.nuevoTexto;
        }
    }
    }).mount('#app')