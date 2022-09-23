import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())

let productos = [
    {codigo:1, nombre:"Silla"},
    {codigo:2, nombre:"Mesa"}]

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.get('/api/productos', (req,res) => {    
    res.json(productos);
})

app.post('/api/productos',(req,res) => {
    // req.body.codigo = Number(req.body.codigo);
    productos.push(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})