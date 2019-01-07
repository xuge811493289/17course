var express = require("express");
var app = express();

// 可以处理静态文件
app.use("/public",express.static("./public"));

// 如果找不到路径的话或默认找到这个路由中的内容，返回404状态码
app.use(function(req,resp){
    resp.status(404).send("没有这个页面...");
})

app.listen(3000,"127.0.0.1",function(){
    console.log("服务器为3000的端口号已经开启...");
})

