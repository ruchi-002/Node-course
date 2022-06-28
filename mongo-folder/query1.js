var http=require("http");
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017";
MongoClient.connect(url,function(err,db){
    if(err)
    throw err;
    var dob1=db.db("mongo-data");
    var query={author:"ruchika"};
    dob1.collection("index1").find(query).toArray(function(err,result){
        if(err)
        throw err;
        console.log(result);
        db.close();
    });
});