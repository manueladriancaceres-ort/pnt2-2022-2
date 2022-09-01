const obj = Vue.createApp({
    data() {
        return {
            miTexto: 'break hasta 21:40',
            nuevoTexto: '',
            mensaje: 'Hola Vue!',
            myStyle: { color: '', fontSize: '50px', background: 'blue', display: 'block' },
            coloraCambiar: ''  // esta propiedad se puede omitir la declaración
        }
    },
    methods: {
        cambiarColor() {
            this.myStyle.color = this.coloraCambiar;
        },
        cambiarMensaje(){
            this.mensaje = this.inputMensaje
        },
        cambiarTexto() {
            this.miTexto = this.nuevoTexto;
        }      
    }    
}).mount('#app')