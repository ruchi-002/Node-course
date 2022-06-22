const app=require('./app');
console.log("Hey!!"); //hey
console.log(app);// app function
console.log(app.x);// value
console.log(app.y); // value
console.log(app.z()); // value

const add=require('./add');
console.log(add.add(2,3));//5
console.log(add.multiply(3,4));//12

const arr=[1,2,3,4,5,6,7];
arr.filter((item)=>{
    console.log(item); // 1,2,3,4,5,6,7
})


