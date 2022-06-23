const https=require('https');
const options={
    hostname:'whatever.com',
    port:8080,
    path:'/todo',
    method:'GET'
}


 const req=https.request(options,res=>{
     console.log(`Status Code : ${res.statusCode}`);

 res.on('data',d=>{
     process.stdout.write(d);
 })
});
const server = https.createServer((req, res) => {

    //Set the response HTTP header with HTTP status and Content type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  });
  

req.on('error',error=>{
    console.log(error);
})

req.end();
server.listen(8080,()=>{
    console.log("server is running on port:  8080");
})
