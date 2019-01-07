var express = require("express");
var app = express();
app.set("view engine","ejs");

app.get("/",function(req,resp){
  resp.render("hahah",{
    "news":["你好呀",'你好啦',"mememe"]
  });
})

app.listen(3000,function(){
  console.log("监听器已经开启...");
})