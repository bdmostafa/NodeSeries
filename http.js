const http = require('http');

const Server = http.createServer((req, res) => {
    console.log(req.url)

    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html'})    
        res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            Hello world
        </body>
        </html>
        `);
    }

    else if (req.url === '/hello') {
        res.writeHead(200, { 'Content-Type': 'text/html'})    
        res.end(`<p>Hello</p>`);
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html'})    
        res.end('Not Found');
    }
})

Server.listen(4000, () => {
    console.log('Listening to port 3000')
})