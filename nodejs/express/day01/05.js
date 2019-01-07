var express= require("express");
var app = express();

app.set("view engine","ejs");
app.get("/",function(req,resp){
    resp.render("form")
})
app.post("/",function(req,resp){
    resp.send("成功");
})
app.listen(3000,function(){
    console.log("端口号为3000的服务器已经开启...");
})