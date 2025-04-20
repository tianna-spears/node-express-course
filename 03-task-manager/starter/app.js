const express= require('express')
const app= express()
const tasks= require('./routes/tasks')

// to connect to the database first before starting up the server
const connectDB= require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.json())

// routes
app.get('/hello', (req, res) =>
    res.send('Task Manager App'))
app.use('/api/v1/tasks',tasks)

// port
const port= 3000;

// we want to setup connection to DB before server
// if that doesn't work then we throw error
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start();
