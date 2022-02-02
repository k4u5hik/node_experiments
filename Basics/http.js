const http = require('http');

const server = http.createServer ((request , response) => {
    console.log(response);
    response.write('Hello World');
    response.end();
})

server.listen(5000);