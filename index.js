

const MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:8000/Mongodatabase";
MongoClient.connection(url,function(err,db){
    if(err)
    throw err;
    console.log("Database created");
    db.close();
});
