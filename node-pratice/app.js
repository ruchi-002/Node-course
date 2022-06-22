var http=require('http');
var dt=require('./add');
http.createServer(function(req,res){
    res.writeHead('200',{'Content-Type':'text/html'})
    res.write("the date and time are currently " + dt.myDateTime());
    res.end();
}).listen(8000);
console.log("Server is running on the port is 8000");