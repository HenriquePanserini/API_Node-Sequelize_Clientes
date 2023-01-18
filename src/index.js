const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let clientes = require('./models/cliente')
let database = require('./database/db')

app.get('/clientes', async(req, res) => {
    const consult1 = await clientes.findAll({
        attributes: [
            'CLICOD',
            'CLINOM'
        ]
    })
    res.send(consult)
});

app.get('/produtos', async(req, res) => {
    const consult2 = await
})

app.listen(3000, () => {
    try {
        console.log('Conectado ao servidor https://localhost:3000')
    } catch (error) {
        console.log(`Erro ao conectar no servidor: ${error}`)
    }
})