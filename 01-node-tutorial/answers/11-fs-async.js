const { readFile, writeFile } = require('fs');

console.log('Task is about to start!');

// This is to read the first file
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    } 
    const first= result;

// This is to read the second file
readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const second= result;

// Here is where I write the first line
    writeFile(
        './temporary/fileB.txt',
        `This is the first line for Week 1- Question 11-fs-async.js homework. Followed by ${first} and ${second}`,
        (err) => {
            if (err) {
                console.log(err);
                return;
        }
        console.log('I just wrote my first line!')

// Write my second line here. Don't forget to append line!
    writeFile(
        './temporary/fileB.txt',
        'This is the second line I wrote for Question 11-fs-async.js homework!',
        { flag: 'a' },
        (err) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('Second line appended!')

// Write line 3/3 here. Don't forget to append line!

    writeFile(
        './temporary/fileB.txt',
        'This is my third and last line for this homework!', 
        { flag: 'a' },
        (err) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('Line addition 3/3 completed!')
            console.log('All tasks completed! Great job!')
        })})
    })})})
