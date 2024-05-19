const http = require('http');
const PORT = 3003;

const server = http.createServer((req, res)=> {
    console.log('Server request');
    console.log('test');
    console.log(req.url, req.method);
    res.setHeader('Content-type', 'text/html');
    res.write('<h1>hellofff!</h1>');
    res.end();
}); 

server.listen(PORT, 'localhost', (error) =>{
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});