// require()引包
var http = require("http");
// 创建一个服务器，参数是一个回调函数，如果有请求进来需要做什么
var server = http.createServer(function(req,res){
  res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
  res.end("我买了iphone"+(1+2+3+2)+"s");
})
// 服务器运行
server.listen(3000,"127.0.0.1");