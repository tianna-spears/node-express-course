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
   const newProducts = products.map((product) => {
    const {id, name, image, price, desc} = product;
        return {id, name, image, price, desc}
   })
    res.json(newProducts);
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
if (sortedProducts.length > 5 ) {
    return res.status(200).send('No products match your search!')
}
    res.status(200).json(sortedProducts)
})


// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'navbar-app/index.html'))
// })

app.all('*', (req, res) => {
    res.status(404).send('404 Error: Resource not found!')
})

app.listen(3000, () => {
    console.log('Server is listening on Port 3000!')
})







// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     console.log('User GET/ hit the resource')
//     res.status(200).send('Home Page')
// })

// app.get('/about', (req, res) => {
//     console.log('User GET/hit the About Page')
//     res.status(200).send('About Page')
// })

// app.all('*', (req,res) => {
//     res.status(404).send('<h1> Resource not found! </h1>')
// })

// app.listen(5000, () => {
//     console.log('Server is listening on Port 5000')
// })

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen