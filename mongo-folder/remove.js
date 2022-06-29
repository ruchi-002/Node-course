var http=require('http');
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017";
MongoClient.connect(url,function(err,db){
    if(err)
    throw err;
    var dob1=db.db("mongo-data");
    var myquery={author:"ruchika"};
    dob1.collection("index1").remove(myquery,function(err,obj){
        if(err)
        throw err;

        console.log(obj +"Record (s) deleted");
        db.close();
    })
})