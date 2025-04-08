// setup server
const express = require('express')
const app= express()

const peopleRouter= require('./routes/people')

// req to middleware to res
const logger= require('./logger.js')
// const authorize= require('./authorize.js')
app.use([logger]);
// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/v1/people', peopleRouter);

app.post('/login', (req, res) => {
    const {name} = req.body;
    if(name) {
        return res
        .status(200)
        .send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials')
})

app.listen(3000, () => {
    console.log('Server is listening on Port 3000')
})