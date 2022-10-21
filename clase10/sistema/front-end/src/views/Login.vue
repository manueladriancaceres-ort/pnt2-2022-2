<template>
  <main>
    <h2>Login</h2>
    <form @submit.prevent="loginForm">
        Email <input v-model="usuarioForm.email" type="email" required> <br/>
        Password <input v-model="usuarioForm.password" type="password"> <br/>
        <button type="submit">Login</button> <br/>
        {{ mensajeError }}
    </form>
  </main>
</template>

<script>
    import {loginStore} from "../stores/loginStore.js"
    import {storeToRefs} from "pinia"
    export default {
        setup() {
            const store = loginStore();
            const { estaLogeado } = storeToRefs(store);
            const {login} = store;
            return {store,login,estaLogeado}
        },
        data() {
            return {
                usuarioForm : {},
                mensajeError : ""
            }
        },
        methods: {
            async loginForm() {
                await this.login(this.usuarioForm);
                if(!this.estaLogeado) {
                    this.mensajeError = "Credenciales incorrectas"
                } else {
                    this.$router.push('/menu')
                }
            }
        }
    }
</script>
