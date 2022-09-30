import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
app.use(cors())
app.use(bodyParser.json())

const port = 3000

let clientes = [{codigo:1,nombre:"Pedro"},
                    {codigo:2,nombre:"Juana"}]

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.get('/api/clientes', (req, res) => {
    res.json(clientes);
})

app.post('/api/clientes', (req, res) => {
    let cliente = req.body;
    cliente.codigo = Number(cliente.codigo);
    clientes.push(cliente);
    res.json({mensaje:'Alta ok'})
})

app.delete('/api/clientes/:id', (req, res) => {
    clientes = clientes.filter(
        cliente => cliente.codigo != Number(
            req.params.id
        )
    )
    res.json({mensaje:'Baja ok'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})