// console.log("Sistema");
import { UsuarioDaoMongoDb } from "./repository/UsuarioDaoMongoDb.js";
import Usuario from "./models/Usuario.js";

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(3001,() => {
    console.log('Sistema escuchando en puerto 3001');    
})

app.get('/api/ping', (req,res) => {
    res.send('pong');
})

app.post('/api/login', async (req,res) => {
    console.log(req.body);
    if( req.body ) {
        const usuarioDaoMongoDb : UsuarioDaoMongoDb = new UsuarioDaoMongoDb();   
        const usuario : Usuario = await usuarioDaoMongoDb.get(req.body.email)
        if ( req.body.password == usuario.getPassword()) {
            res.sendStatus(200);  
        } else {
            res.sendStatus(401);  
        }
    } else {
        res.sendStatus(400);  
    }
})



// import { UsuarioDaoMongoDb } from "./repository/UsuarioDaoMongoDb.js";
// import Usuario from "./models/Usuario.js";

// const usuarioDaoMongoDb : UsuarioDaoMongoDb = new UsuarioDaoMongoDb();

// const usuario: Usuario = new Usuario("usuario@sistema.com","123456");
// await usuarioDaoMongoDb.add(usuario);
// console.log(await usuarioDaoMongoDb.get("usuario@sistema.com"));



/*
import { ProductoDaoMongoDb } from "./repository/ProductoDaoMongoDb.js";
import Producto from "./models/Producto.js";

const productoDaoMongoDb : ProductoDaoMongoDb = new ProductoDaoMongoDb();
*/

//const producto: Producto = new Producto(1,"Tele",120000);
//await productoDaoMongoDb.add(producto);
//console.log(await productoDaoMongoDb.findAll());


/*
import {ClienteDaoMongoDb} from './repository/ClientesDaoMongoDb.js'
import Cliente from './models/Cliente.js'
const clienteDaoMongoDb : ClienteDaoMongoDb = new ClienteDaoMongoDb();
// const cliente:Cliente = new Cliente(45645);
// await clienteDaoMongoDb.add(cliente);
console.log(await clienteDaoMongoDb.delete(25235));
console.log(await clienteDaoMongoDb.findAll());
console.log(await clienteDaoMongoDb.get(45645));
*/ 

/*
import {ConectarMongoDb} from './repository/ConectarMongoDb.js'
const conexionMongoDb : ConectarMongoDb = new ConectarMongoDb();
conexionMongoDb.conectar();
*/


// clase anterior
/*
import Cliente from './models/Cliente.js'
const cliente:Cliente = new Cliente(25235);
console.log(cliente.getNumero());
*/