require('dotenv').config();
require('express-async-errors')

const express = require('express');
const app = express();
const connectDB= require('./db/connect')
const productsRouter= require('./routes/products');

// import middleware
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFoundMiddleware = require('./middleware/not-found');
const { getAllProducts } = require('./controllers/products');

// to use middleware 
app.use(express.json());

// setup my routes
app.get('/', (req, res) => {
    res.send('<h1> 04 - Store API </h1> <a href="/api/v1/products"> products route </a>')
})

app.use('/api/v1/products', productsRouter)

// products route

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const PORT = process.env.PORT || 4000;

const start = async () => {
    try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}...`))
} catch(error) {
    console.log(error)
    }
};

// start Express server
start()

