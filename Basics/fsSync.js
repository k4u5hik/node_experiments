const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/1.txt', 'utf8');
const second = readFileSync('./content/subFolder/2.txt', 'utf8');

writeFileSync(
    './content/result-sync.txt',
    `Here is the result of the two files: ${first} and ${second}`
);