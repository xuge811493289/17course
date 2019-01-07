var express = require("express");
var app = express();



// 请求  /admin/admin
// 该中间件会执行所有的以/admin开始的请求
app.use("/admin",function(req,resp){
    // resp.write(req.originalUrl); //  /admin/admin
    // resp.write(req.path);        //   /admin/admin
    // resp.write(req.baseUrl);     //   /admin
    resp.end();
})

app.listen(3000,"127.0.0.1",function(){
    console.log("端口号为3000的服务器已经开启...");
})