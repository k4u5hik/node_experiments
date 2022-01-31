// Path Module documentation: https://nodejs.org/api/path.html

const path = require('path');

console.log(path.sep); // adds a forward slash seperator

const filepath = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
console.log(filepath);
// Returns: '/foo/bar/baz/asdf'

const delimiter = path.delimiter;
console.log(delimiter);

console.log(path.basename(filepath));
// basename is the last part of the path
// __dirname is the current directory
// __filename is the current file
console.log(__dirname);