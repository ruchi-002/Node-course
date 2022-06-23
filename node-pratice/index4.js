var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send( `<input type="text" placeholder="User name" value="${req.query.name}"/>
     <br> <br>
     <button>Click Me</button>
     <br><br>
     <a href="/hello">Go to Hello Page</a>
    `);
})

app.get('/hello', function(req, res){
   res.send(`
   <h1>Hello World!</h1> <a href="/about">Go to About Page</a>
   `
   );
});
app.get('/about',function(req,res){
    res.send(`<h2>About Page</h2>
    <a href="/">Go to Home Page</a>
    `)
})
app.get('/test1',function(req,res){
    res.send([
        {
            name:"ruchika",
            email:"ruchika@test.com"
           },
           {
            name:"ruchi",
            email:"ruchi@test1.com"
           }

    ]
       
    )
})

app.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});
app.all('/test', function(req, res){
    res.send("HTTP method doesn't have any effect on this route!");
 });

	app.listen(3000);