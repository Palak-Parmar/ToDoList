//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items = ["Buy Food", "Eat Food", "Eat more food"];
app.set('view engine', 'ejs');

app.get("/", function(req, res){
let today= new Date();
let options=
{
  weekday :"long",
  month :"long",
  day:"numeric"
};

let day = today.toLocaleDateString("en-US",options);

res.render("list", {KindOfDay:day, newItems: items });
});

app.post("/",function(req,res)
{
  let item = req.body.newVal;
  items.push(item);
  res.redirect("/");
});


app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
