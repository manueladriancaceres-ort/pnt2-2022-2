const { createApp } = Vue
      
        createApp({
          data() {
            return {
                mensaje: 'Bienvenido a Vue!'
            }
          },
          method:{
            cambiarMensaje(mensaje){
                this.mensaje = mensaje;
            }
          },
          template: `
            <p> {{ mensaje }} </p>
            <input v-model="mensaje"/>
          `
        }).mount('#app')