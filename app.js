//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require ( __dirname + "/date.js" );

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items = ["Buy Food", "Eat Food", "Eat more food"];
let workItems=[];
app.set('view engine', 'ejs');

app.get("/", function(req, res)
{
  let day = date.getDate();
  res.render("list", {listTitle:day, newItems: items });
});

app.post("/",function(req,res)
{
  let item = req.body.newVal;

  if(req.body.list === "Work")
  {
    workItems.push(item);
    res.redirect("/Work")
  }
  else
    {
      items.push(item);
      res.redirect("/");
    }
});

app.get("/Work",function(req,res)
{
  res.render("list", {listTitle: "Work List", newItems:workItems});
});

app.post("/Work",function(req,res)
{
  let item=req.body.newVal;
  workItems.push(item);
  res.redirect("/Work");
});

app.get("/about", function(req,res)
{
  res.render("about");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
