// setup server
const express = require('express')
const app= express()
let { people, products } = require('./data.js')

// req to middleware to res
const logger= require('./logger.js')
// const authorize= require('./authorize.js')
app.use([logger]);

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))

app.get('/api/v1/people', (req,res) => {
    res.status(200).json({ success:true, data:people })
})

app.post('/login', (req, res) => {
    const {name} = req.body;
    if(name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials')
    res.send('POST')
})


app.get('/api/products', (req,res) => {
    res.send('Products')
})

app.listen(3000, () => {
    console.log('Server is listening on Port 3000')
})

