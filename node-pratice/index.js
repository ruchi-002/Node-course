var http=require('http');
http.createServer(function(req,res){
    // send the HTTP header
    // HTTP status 200 ok
    // Content-type:text/plain
    res.writeHead(200,{'Content-Type':'text/plain'});
    // send the response body as "Welcome in GeekyAnts"
    res.end('welcome in GeekyAnts');
}).listen(8000);
// console will print the message 
console.log('server is running on port : 8000');

