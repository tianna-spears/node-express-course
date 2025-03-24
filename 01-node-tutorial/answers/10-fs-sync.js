const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first,second);

writeFileSync(
    './temporary/fileA.txt', 
    `Writing three lines to the file plus: 
     ${first}, ${second}`,
    { flag: 'a' }
)

console.log(readFileSync);