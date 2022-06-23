const fs=require('fs');
// fs.mkdir('node-tut',(err)=>{
//     console.log(`error is ${err}`);
// });
// fs.writeFile('node-tut/ruchi.txt','hey my new file !!',(err,data)=>{
//     if(err)
//     throw err;
//     console.log(data);
// });
// fs.unlink('ruchi.txt',(err)=>{
//    if(err)
//    console.log(err);
// });
// fs.appendFile('node-tut/ruchi.txt',' this is my ruchi.txt file ' ,(err,data)=>{
//     if(err)
//     console.log(err);
// });
// fs.appendFile('node-tut/ruchi.txt','i am ruchika sharma !!!',
// ()=>{console.log('append successfully!!')});
// fs.readFile('node-tut/ruchi.txt','utf-8',(err,data)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log(data);
// });
// fs.rename('node-tut/ruchi.txt','node-tut/ruchika.txt',(err)=>{
//     console.log("rename successfully !!!");
// });
// fs.unlink('node-tut/ruchi.txt',(err)=>{
//     console.log('removed file');
// });
 fs.rmdir('node-tut',(err)=>{
     console.log('removed folder');
 });
