const MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017";  
MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
var dbo=db.db("mongo-data");
dbo.createCollection("index",function(err,res){
    if (err) throw err; 

    console.log("Collection is created!");  
    db.close();    
});
});