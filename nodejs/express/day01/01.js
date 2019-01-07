// 引进express框架
var express = require("express");
// 返回的是一个函数，函数需要执行，执行后的返回值为app
var app = express();

app.get("/",function(req,resp){
    resp.send("你好");
})

app.get("/hello",function(req,resp){
    resp.send("你好呀！")
})


app.get("/teacher/:gonghao",function(req,resp){
    resp.send("教师工号："+req.params["gonghao"])
})

app.get(/\/student\/(\d{10})/,function(req,resp){
    resp.send("学生学号为:"+req.params[0]);
})

app.listen(8080,function(){
    console.log("8080已经启动，可以开始请求...")
});

