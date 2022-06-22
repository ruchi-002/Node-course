const https=require('https');
const options={
    hostname:'whatever.com',
    port:8000,
    path:'/todo',
    method:'GET'
}


 const req=https.request(options,res=>{
     console.log(`Status Code : ${res.statusCode}`);

 res.on('data',d=>{
     process.stdout.write(d);
 })
});

req.on('error',error=>{
    console.log(error);
})

req.end();
