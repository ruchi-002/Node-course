var http=require('http');
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017";
MongoClient.connect(url,function(err,db){
    if(err)
    throw err;
    var dob1=db.db("mongo-data");
    dob1.collection("index1").find({}).toArray(function(err,result){
        if(err)
        throw error;
        console.log(result);
        db.close();
    });
});