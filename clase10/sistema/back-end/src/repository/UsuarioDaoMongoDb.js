import Usuario from '../models/Usuario.js';
import { ConectarMongoDb } from './ConectarMongoDb.js';
class UsuarioDaoMongoDb {
    constructor() {
        this.conectarMongoDb = new ConectarMongoDb();
    }
    async add(elemento) {
        const db = await this.conectarMongoDb.conectar();
        if (db != undefined) {
            const collection = db.collection('usuarios');
            await collection.insertOne(elemento);
            this.conectarMongoDb.desconectar();
        }
        return Promise.resolve(true);
    }
    async findAll() {
        const db = await this.conectarMongoDb.conectar();
        const usuarios = new Array;
        if (db != undefined) {
            const collection = db.collection('usuarios');
            const findResult = (await collection.find({}).toArray());
            findResult.forEach(e => usuarios.push(new Usuario(e.email, e.password)));
            this.conectarMongoDb.desconectar();
        }
        return Promise.resolve(usuarios);
    }
    async get(email) {
        const db = await this.conectarMongoDb.conectar();
        const usuario = new Usuario("", "");
        if (db != undefined) {
            const collection = db.collection('usuarios');
            const findResult = await collection.findOne({ email: email });
            if (findResult != null) {
                usuario.setEmail(findResult.email);
                usuario.setPassword(findResult.password);
            }
            this.conectarMongoDb.desconectar();
        }
        return Promise.resolve(usuario);
    }
    async delete(email) {
        const db = await this.conectarMongoDb.conectar();
        if (db != undefined) {
            const collection = db.collection('usuarios');
            await collection.deleteMany({ email: email });
            this.conectarMongoDb.desconectar();
        }
        return Promise.resolve(true);
    }
}
export { UsuarioDaoMongoDb };
