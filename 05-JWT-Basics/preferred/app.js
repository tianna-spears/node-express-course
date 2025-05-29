// Import Required Express Modules
const express = require('express')
// require('express-async-errors')
require('dotenv').config();

// Initialize Express Application
const app = express();

// Routers and Middleware Here
const loginRouter = require('./routes/login.js')
const helloRouter = require('./routes/hello');
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler.js');

// Middleware 
app.use(express.json())
app.use(express.static('./public'))

// Register My Routers
app.use('/api/v1/login', loginRouter)
app.use('/api/v1/hello', helloRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

// Setup Home Page/ Basic Route
app.get('/', (req, res) => {
    res.send('./public/index.html')
})

// Define PORT
const PORT = process.env.PORT || 3000

// Insert Try and Catch Statements into Server Starter
const start = async () => {
    try {
        app.listen(PORT, console.log(`Server is listening on port ${PORT}...`))
    } catch (error) {
        console.log(err)
    }
}

// Start Server
start();


// JWT Information Here
// const jwt = require('jsonwebtoken')


// JWT Implementation:
// Use jsonwebtoken functions jwt.sign and jwt.verify.
// Why: jwt.sign generates tokens and jwt.verify validates them, essential for secure authentication.
// Generate a secure key using this generator.
// Why: Ensures your JWTs are secure by using a strong, unpredictable key.