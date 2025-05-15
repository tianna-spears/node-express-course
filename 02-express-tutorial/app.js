// week 3 HW
const express = require('express');
const app = express();

const { products } = require('./data')

// setup static and middleware
app.use(express.static('./public'))
// add to static assets or server-side rendering

app.get('/api/v1/test', (req, res) => {
    res.json([{ message: "It worked!" }])
})

app.get('/api/v1/products', (req, res) => {
    res.json(products);
})
app.get('/api/v1/products/:productID', (req, res) => {
    const { productID } = req.params;

    const singleProduct = products.find((product) => product.id === Number(productID)
    )
    if (!singleProduct) {
        return res.status(404).send({ message: 'That product was not found.' });
    } 
    res.json(singleProduct);
})

app.get('/api/products/:productsID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('hello world!')
})

app.get('/api/v1/query', (req, res) => {
    // console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = [...products];
    
if (search) {
    sortedProducts = sortedProducts.filter((product) => {
    return product.name.startsWith(search)
    })
 }

if (limit) {
    sortedProducts= sortedProducts.slice(0, Number (limit))
} 
if (sortedProducts.length < 1 ) {
    return res.status(200).send('No products match your search!')
}
    res.status(200).json(sortedProducts)
})


// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'navbar-app/index.html'))
// })

app.all('*', (req, res) => {
    res.status(404).send('404 Error: Resource not found!')

 
// setup server 
// Week 4 HW
  
// const express = require('express')
// const app= express()

// const peopleRouter= require('./routes/people')

// // req to middleware to res
// const logger= require('./logger.js')
// // const authorize= require('./authorize.js')
// app.use([logger]);
// // static assets
// app.use(express.static('./methods-public'))
// // parse form data
// app.use(express.urlencoded({ extended: false }))
// // parse json
// app.use(express.json())

// app.use('/api/v1/people', peopleRouter);

// app.post('/login', (req, res) => {
//     const {name} = req.body;
//     if(name) {
//         return res
//         .status(200)
//         .send(`Welcome ${name}`)
//     }
//     res.status(401).send('Please provide credentials')
