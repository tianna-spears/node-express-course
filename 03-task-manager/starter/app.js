const express= require('express')
const app= express()
const tasks= require('./routes/tasks')
const notFound= require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// to connect to the database first before starting up the server
const connectDB= require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

// port
const port= process.env.PORT || 3000;

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
