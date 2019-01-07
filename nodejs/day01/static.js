// require()引包
var http = require("http");
var fs = require("fs");
// 创建一个服务器，参数是一个回调函数，如果有请求进来需要做什么
var server = http.createServer(function(req,res){
  console.log(req.url);
  if(req.url == "/red"){
    fs.readFile("./test.html",function(err,data){
      res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
      res.end(data);
    })
  }else if(req.url == "/blue"){
    fs.readFile("./test1.html",function(err,data){
      res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
      res.end(data);
    })
  }else if(req.url == "/1.jpg"){
    fs.readFile("./1.jpg",function(err,data){
      res.writeHead(200,{"Content-type":"image/jpeg;charset=UTF-8"});
      res.end(data);
    })
  }else{
    res.end("404，没有这个页面哦");
  }
})
// 服务器运行
server.listen(3000,"127.0.0.1");