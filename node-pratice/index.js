const fs=require('fs');
fs.writeFile('MyBlog.txt','I am glad to welcome you on my website devoted to traveling. My name is Uliana, I am 30 years old and as you may guess I am fond of exploring this big and incredible world. I was born in Kiev, Ukraine and I am living and working there between my travels. I am sorry for my English which is far away from perfect, but I hope it will not disturb you much and you will find my articles and stories interesting and informative',(err)=>{
    console.log(err);
});

const buf_data=fs.readFile('Myblog.txt',(err,data)=>{
    if(err)
     throw err;
     else
     console.log(data.toString());
});
console.log(buf_data);

// const org_data=buf_data.toString();
// console.log(org_data);