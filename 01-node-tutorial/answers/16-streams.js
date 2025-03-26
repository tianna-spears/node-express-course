const { createReadStream } = require('fs');

const stream= createReadStream('../content/big.txt', {
    encoding: 'utf-8', 
    highWaterMark: 300
}); 

    let i = 0;
    stream.on('data', (chunk) => {
        i++;
        console.log(`Chunk ${i}:`, chunk);
    });
    stream.on('end', () => {
        console.log(`Received ${i} chunks`)
    })
    stream.on('error', err => {
        console.log('An error occured', err)
    });