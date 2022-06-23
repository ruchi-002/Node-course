const fs=require('fs');
// fs.writeFileSync('read.txt',"Hello Everyone!!");
fs.writeFileSync('read.txt',"Hello");
fs.appendFileSync('read.txt'," Everyone!!");
// fs.readFileSync('read.txt',(err)=>{
//     if(err)
//     console.log(err);
//     else 
//     console.log("read successfully");
// })

const buf_data=fs.readFileSync('read.txt');
console.log(buf_data);

const org_data=buf_data.toString();
console.log(org_data);

fs.renameSync('read.txt','My.txt');
fs.unlinkSync('My.txt');