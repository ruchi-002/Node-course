const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("data is sent by the browser", req.query.name);
  res.send("Hello , Geeky " + req.query.name);
});
app.get("/about", (req, res) => {
  res.send("this is about page");
});
app.get("/contact", (req, res) => {
  res.send("this is contact page");
});
app.get("/temp", (req, res) => {
  res.send("this is template page");
});
app.get("/hey", (req, res) => {
  res.write("Hello , how are you ");
  res.send();
});
app.get("/hi", (req, res) => {
  res.send([
    {
      name: "ruchika",
      id: 1325,
    },
    {
      name: "aditi",
      id: 1372,
    },
  ]);
});
app.get("/me",(req,res)=>{
    res.json([
        {
          name: "kritika",
          id: 1322,
        },
        {
          name: "tanima",
          id: 1364,
        },
      ]);
    });
app.get("/geek",(req,res)=>{
    res.send({
        name:"ruchi",
        id:1381
    })
})
app.post("/about", (req, res) => {
  res.send("this is post about page");
});
app.listen(8000, () => {
  console.log("server is running on port : 8000 ");
});
