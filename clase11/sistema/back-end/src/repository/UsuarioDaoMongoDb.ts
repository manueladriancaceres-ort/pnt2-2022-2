import Dao from './Dao.js'
import Usuario from '../models/Usuario.js';
import { ConectarMongoDb } from './ConectarMongoDb.js';

class UsuarioDaoMongoDb implements Dao<Usuario,String>{

    private conectarMongoDb : ConectarMongoDb = new ConectarMongoDb();

    public async add (elemento: Usuario) : Promise<Boolean> {
        const db = await this.conectarMongoDb.conectar();
        if(db != undefined) {
            const collection = db.collection('usuarios');    
            await collection.insertOne(elemento);
            this.conectarMongoDb.desconectar();    
        }
        return Promise.resolve(true);    
    }
    public async findAll () : Promise<Usuario[]> {
        const db = await this.conectarMongoDb.conectar();
        const usuarios = new Array<Usuario>;                
        if(db != undefined) {
            const collection = db.collection('usuarios');    
            const findResult = (await collection.find({}).toArray()) 
            findResult.forEach( e => 
                usuarios.push(new Usuario(e.email,e.password)) );
            this.conectarMongoDb.desconectar();    
        }
        return Promise.resolve(usuarios);
    }
    public async get (email: String) : Promise<Usuario> {
        const db = await this.conectarMongoDb.conectar();
        const usuario = new Usuario("","");
        if(db != undefined) {
            const collection = db.collection('usuarios');    
            const findResult = await collection.findOne({email:email})
            if(findResult != null) {
                usuario.setEmail(findResult.email);
                usuario.setPassword(findResult.password);
            }
            this.conectarMongoDb.desconectar();    
        }
        return Promise.resolve(usuario);
    }
    public async delete (email: String) : Promise<Boolean> {
        const db = await this.conectarMongoDb.conectar();
        if(db != undefined) {
            const collection = db.collection('usuarios');    
            await collection.deleteMany({email:email});
            this.conectarMongoDb.desconectar();    
        }
        return Promise.resolve(true)
    }

}

export {UsuarioDaoMongoDb}