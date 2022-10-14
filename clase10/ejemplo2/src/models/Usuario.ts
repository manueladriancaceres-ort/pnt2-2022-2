class Usuario {
    private email: String;
    private password: String;
    constructor(email: String,password: String) {
        this.email = email;
        this.password = password;
    }
    public setEmail(email:String) {
        this.email = email;
    }
    public getEmail() : String{
        return this.email;
    }
    public getPassword() : String{
        return this.password;
    }
    public setPassword(password:String) {
        this.password = password;
    }

}

export default Usuario