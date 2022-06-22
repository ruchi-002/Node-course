// console.log("Hello world");
var http=require('http');
http.createServer(function(req,res){
    
    // res.write('Welcome in GeekyAnts');
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end("Welcome in GeekyAnts");
    // console.log("Welcome in GeekyAnts");
    
}).listen(8080);