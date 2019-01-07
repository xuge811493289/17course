// 引进express框架
var express = require("express");
// 返回的是一个函数，函数需要执行，执行后的返回值为app
var app = express();

app.use(express.static("./public"));

app.get("/hha",function(req,resp){
    resp.send("haahhah")
})
app.listen(8080,function(){
    console.log("8080已经启动，可以开始请求...")
});

