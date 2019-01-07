// 1.引入http模块
var http = require("http");

// 2.创建http服务器，当每次接收到客户端请求的时候，调用回调函数
var server = http.createServer(function(req,resp){
  resp.writeHead(200,"OK",{"content-type":"text/html;charset=utf8"});
  resp.write("<h1>欢迎您的访问！</h1>")
  resp.end();
})

// 3.监听客户端请求
server.listen("8888",function(){
  console.log("服务器8888启动成功，并且开启监听")
})
