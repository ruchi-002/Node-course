var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017';
MongoClient.connect(url,function(err,db){
    if(err)
    throw err;
    var dbo=db.db("mongo-data");
    var myQuery={author:"ruchika1"};
    var newvalues={$set:{author:"Ruchika ",title:"About songs"}};
    dbo.collection("index1").updateOne(myQuery,newvalues,function(err,res){
        if(err)
        throw err;
        console.log("document 1 is updated");
        db.close();
    });
});