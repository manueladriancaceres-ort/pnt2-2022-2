import { defineStore } from 'pinia'
import axios from 'axios'

export const loginStore = defineStore('counter', {
    state: () => {
        return {
            usuario: {},
            estaLogeado : false
        }
    },
    actions: {
        async login(usuario) {
            try {
                const data = await axios.post("http://localhost:3001/api/login",usuario);
                if(data.status == 200) {
                    this.estaLogeado = true;
                    this.usuario.email = usuario.email;
                    localStorage.setItem('usuario',JSON.stringify({email:usuario.email}) )
                } else {
                    this.estaLogeado = false;
                }
            } catch(e) {
                console.log(e);
            }
        },
        async logout() {
            this.estaLogeado = false;
            location.reload();
            localStorage.removeItem('usuario');
        }

    }
})
