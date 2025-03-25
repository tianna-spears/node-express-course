const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
    await writeFile('./temp.txt', "First Line 1\n");
    await writeFile('./temp.txt', 'Second Line 2\n', { flag: 'a' });
    await writeFile('./temp.txt', 'Third Line 3\n', { flag: 'a' });
}

const reader = async () => {
    const data= await readFile('./temp.txt', 'utf-8');
    console.log("Contents of File:\n", data);
}

const readWrite = async () => {
    await writer();
    await reader();
}

readWrite();