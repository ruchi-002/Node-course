var http=require('http');
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017";
MongoClient.connect(url,async function(err,db){
    if(err)
    throw err;
    var dob1=db.db("mongo-data");
    // var mysort={title:1};
//    let result = await  dob1.collection("index1").find({},{title:1,_id:0}).sort(mysort).toArray()
//    console.log(result)
      dob1.collection("index1").find({},{title:1}).toArray(function(err,res){
          if(err)
          throw err;
          console.log(res);
      });

    //  console.log(res);
   
})
