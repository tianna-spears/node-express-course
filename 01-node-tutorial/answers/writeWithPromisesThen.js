const { writeFile, readFile } = require("fs").promises;

const writer = () => {
    return writeFile('./temp.txt', "First Line 1\n")
        .then(() => writeFile('./temp.txt', 'Second Line 2\n', { flag: 'a' }))
        .then(() => writeFile('./temp.txt', 'Third Line 3\n', { flag: 'a' }))
        .catch ((error) => {
            console.log("An error occurred:", error)
        });
}

const reader = () => {
    return readFile('./temp.txt', 'utf-8')
    .then((data) => console.log("Contents of File:\n", data))
    .catch((error) => console.log('An error occurred:', error))
}

const readWrite = () => {
    writer().then(() => reader())
}

readWrite();