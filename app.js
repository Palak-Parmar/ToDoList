//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.get("/", function(req, res){
var today= new Date();
var currentday = today.getDay();
var day="";

switch(currentday)
{
case 0:
   day="Sunday";
break;
case 1:
   day="Monday";
break;
case 2:
   day="Tueday";
break;
case 3:
   day="Wedneday";
break;
case 4:
   day="Thursday";
break;
case 5:
   day="Friday";
break;
case 6:
   day="Saturday";
break;
}
console.log("error");

res.render("list", {KindOfDay:day});
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
