const MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:8000/mongodata";
MongoClient.connect(url,function(err,db){
    if(err)
    throw err;
    db.createCollection("blogs",function(err,res){
        console.log("collection is created");
        db.close();
    });
});
