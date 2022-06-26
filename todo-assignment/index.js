var express = require("express");
var app = express();

app.use(express.json());
var tasks = [];

app.get("/", (req, res) => {
  res.send(tasks);
});

const check = (req, res, next) => {
  const { task, i } = req.body;
  if (typeof i !== "undefined") {
    let index = parseInt(i);
    console.log(index, tasks.length);
    if (index < tasks.length && index >= 0) {
      tasks.splice(index, 1);
      res.send("task deleted successfully");
    } else {
      tasks.push(task);
      res.send("task add successfully");
    }
  } else {
    tasks.push(task);
    res.send("task add successfully");
  }
  next();
};
app.post("/", check, (req, res) => {
  res.statusCode = 200;
  res.redirect("/");
});

app.listen(6060, function () {
  console.log("example app listening at port 6060");
});
