const http=require('http');
const server = http.createServer((req, res) => {

    //Set the response HTTP header with HTTP status and Content type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // res.write('hey!!');
    res.end("hello world\n");
    
  });
  
 
server.listen(8080,()=>{
    console.log("server is running on port:  8080");
})
