const MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017";
MongoClient.connect(url,function(err,db){
    if(err)
    throw err;
    // var myObj={title:"About name",auther:"Ruchika Sharma",category:"Name"};
    var myObj=[{title:"company",author:"ruchika",category:"cp"},{title:"company1",author:"ruchika1",category:"cp-1"}]
    var dob1=db.db("mongo-data");
    dob1.collection("index1").insertMany(myObj,function(err,res){
        if(err)
        throw err;
        console.log("index 1 is inserted");
        db.close();
    })
})