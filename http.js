const http = require('http');
const fs = require('fs');
const path = require('path');

const Server = http.createServer((req, res) => {
    console.log(req.url)
    const stream = fs.createReadStream(path.join(__dirname, 'index.html'))
    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html'})    
        // res.end(`
        // <!DOCTYPE html>
        // <html lang="en">
        // <head>
        //     <meta charset="UTF-8">
        //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //     <title>Document</title>
        // </head>
        // <body>
        //     Hello world
        // </body>
        // </html>
        // `);
        stream.pipe(res)
    }

    else if (req.url === '/hello') {
        res.writeHead(200, { 'Content-Type': 'text/html'})    
        res.end(`<p>Hello</p>`);
    }else if (req.url === '/api/data') {
        const users = [
            {
                id: 1,
                name: 'Mostafa'
            }
        ]
        res.writeHead(200, { 'Content-Type': 'text/json'})    
        res.end(JSON.stringify(users));
    } 
     else {
        res.writeHead(200, { 'Content-Type': 'text/html'})    
        res.end('Not Found');
    }
})

Server.listen(4000, () => {
    console.log('Listening to port 3000')
})