//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
var items = [];
app.set('view engine', 'ejs');

app.get("/", function(req, res){
var today= new Date();
var options=
{
  weekday :"long",
  year:"numeric",
  month :"long",
  day:"numeric"
};

var day = today.toLocaleDateString("en-US",options);

res.render("list", {KindOfDay:day, newItems:items });
});

app.post("/",function(req,res)
{
  var item = req.body.newVal;
  items.push(item);
  res.redirect("/");
});


app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
