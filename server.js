'use strict';

const http= require('http');
const fs = require('fs');
const server = http.createServer(function (request, response) {
    if (request.url === '/main.css'){
        const text = fs.readFileSync('main.css', 'utf-8');
        console.log(response.url);
        response.end(text);
    }
    else {
        if (request.url === '/main.js'){
            const text = fs.readFileSync('main.js', 'utf-8');
            console.log(response.url);
            response.end(text);
        }else{
            const text = fs.readFileSync('index.html', 'utf-8');
            console.log(response.url);
            response.end(text);
        }
    }
});
server.listen(process.env.PORT||8000);
console.log('server start');