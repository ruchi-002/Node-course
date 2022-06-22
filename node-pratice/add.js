var http=require('http');
http.createServer(function(req,res){
    // write a response to the client
    res.write("Hello ,GeekyAnts");
    //end the response
    res.end();
    //the server object listens on port 8080
}).listen(8080);

//