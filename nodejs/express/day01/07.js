var express = require("express");

var server = express();

var a = 1;
server.get("/",function(req,resp){
    a++;
    resp.send(a.toString());
})  


server.listen(3000,"127.0.0.1",function(){
    console.log("3000服务已经开启....");
})