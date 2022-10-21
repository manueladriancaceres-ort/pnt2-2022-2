class Usuario {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    setEmail(email) {
        this.email = email;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
}
export default Usuario;
