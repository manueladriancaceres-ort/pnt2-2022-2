import { MongoClient } from 'mongodb';
class ConectarMongoDb {
    constructor() {
        this.url = 'mongodb://localhost:27017'; // archivo .env
        this.client = new MongoClient(this.url);
        this.dbName = 'miproyecto';
    }
    async conectar() {
        try {
            await this.client.connect();
            console.log('conectado');
            const db = this.client.db(this.dbName);
            return db;
        }
        catch (e) {
            console.log(e);
        }
    }
    async desconectar() {
        await this.client.close();
        console.log('desconectado');
    }
}
export { ConectarMongoDb };
