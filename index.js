const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const PORT=process.env.PORT || 8080;
const dotenv=require('dotenv');
const allRouter=require('./routes/all');
const activeRouter=require('./routes/active');
const completeRouter=require('./routes/completed');

// const expressLayouts = require('express-ejs-layouts');
const todoModel=require('./models/Tododb');
const db=require('./config/mongoose');
dotenv.config();
// // set up the view engine
app.set("view engine","ejs");

// app.set('views','./views');
app.use(express.static('public'));
app.use(express.static('./assets/css/style.css'));
// app.use(expressLayouts);
app.use('css',express.static(__dirname + 'assets/css'));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/all',allRouter);
app.use('/active',activeRouter);
app.use('/complete',completeRouter);

app.get('/', async(req, res) => {
    res.redirect('/all');
})

app.listen(PORT,()=>{
     console.log(`server is running on PORT ${PORT}`);
})


