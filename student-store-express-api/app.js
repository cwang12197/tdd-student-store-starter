const store = require('./models/store')
const express = require('express') //wiring the server
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express() 

app.use(bodyParser.json())
app.use(morgan('tiny')) 

app.get('/', (req, res) => {
    res.status(200).send({"ping": "pong"})
})

app.get('/store', (req, res) => {
    res.status(200).send(store.listProducts())
})

app.get(`/store/:productId`, (req, res) => {
    const id = req.params.productId //everytime you get you make a request with the params of the get function and can retrieve the ProductId value because named it that in the params
    res.send(store.fetchProductById(id))
})

app.post(`/store`, (req, res) => {
    
})

module.exports = app //makes it like export default function