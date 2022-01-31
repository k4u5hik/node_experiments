// Documentation fs module
// https://nodejs.org/api/fs.html#file-system

const {readFileSync, writeFileSync} = require('fs');
const {delimiter} = require('path');

// Above is more efficient, however it depends on the use case.
// same as below
// const readFileSync = require('fs').readFileSync;
//or
// const fs = require('fs');
// fs.readFileSync('file.txt');

const first = readFileSync('./content/1.txt', 'utf8');
const second = readFileSync('./content/subFolder/2.txt', 'utf8');

console.log(first, delimiter ,second);
// incorporated path module to get the delimiter between the two text files

writeFileSync ('./content/combined.txt', `Here is the result: ${first} ${delimiter} ${second} `);
// Wrote a new file and combined the two text files

writeFileSync ('./content/combined.txt', ` We append this text `, {flag: 'a'});
// Appended the text to the file

// Documentation includes more options like mkdir , opendir, copy - mainly promises, callback, sync and common objects