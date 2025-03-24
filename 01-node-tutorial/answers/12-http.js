const http= require('http');

const server= http.createServer((req, res)=> {
    if (req.url === '/') {
        res.end('Home pageeee!')
    } else if (req.url === '/about') {
        res.end('About page goes here.')
    } else {
    res.end(
        `<h1> Page does not exist </h1>
        <p> Please go back to <a href='/'> home page </a> </p>`
)}
})
    
server.listen(3000, () => {
    console.log('My server is running on http:localhost:3000!!')
});