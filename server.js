'use strict';

const http= require('http');
const fs = require('fs');
const server = http.createServer(function (request, response) {
    if (request.url === '/main.css'){
        const text = fs.readFileSync('main.css', 'utf-8');
        response.end(text);
    } else {
        const text = fs.readFileSync('index.html', 'utf-8');
        response.end(text);
    }
});
server.listen(process.env.PORT||8000);
console.log('server start');