const MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017";  
MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
var dbo=db.db("mongodatabase");
dbo.createCollection("blogs",function(err,res){
    if (err) throw err; 

    console.log("Collection is created!");  
    db.close();    
});
// db.createCollection("blogs", function(err, res) {  
// if (err) throw err; 

// console.log("Collection is created!");  
// db.close();  
// });  
});