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
// parse json
app.use(express.json())

app.get('/api/v1/people', (req,res) => {
    return res
    .status(200)
    .json({ success: true, data: people })
})

app.post('/api/v1/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res
            .status(400)
            .json({ success: false, message: 'Please provide your name.' })
    }
    // people.push({ id: people.length + 1, name: req.body.name });
    // res.status(201).json({ success: true, name: req.body.name });
    res.status(201).json({ success: true, person: name })
})

app.post('/api/v1/postman/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res
            .status(400)
            .json({ success: false, message: 'Please provide your name.' })
        }
        res.status(201).send({ success: true, data: [...people, name] })
})

app.post('/login', (req, res) => {
    const {name} = req.body;
    if(name) {
        return res
        .status(200)
        .send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials')
})

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res
            .status(404)
            .json({ success: false, message: `No person with this id ${id}` })
        }
        const newPeople = people.map((person) => {
            if(person.id === Number(id)) {
                person.name = name
            }
            return person
        })
        res.status(200).send({ success: true, data: newPeople })

})


app.listen(3000, () => {
    console.log('Server is listening on Port 3000')
})

